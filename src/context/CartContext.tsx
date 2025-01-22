"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product, CartContextType } from "../../data/products";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Load cart and wishlist from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    const storedWishlist = localStorage.getItem("wishlistItems");

    if (storedCart) setCartItems(JSON.parse(storedCart));
    if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist));
  }, []);

  // Save cartItems to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlistItems to localStorage whenever wishlistItems change
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = async (product: Product) => {
    const existingProduct = cartItems.find((item) => item._id  === product._id);

    if (existingProduct) {
      if (existingProduct.quantity < product.stockLevel) {
        setCartItems((prev) =>
          prev.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
        await updateSanitystockLevel(product._id, product.stockLevel - 1); // Update Sanity stockLevel
      } else {
        alert("stockLevel limit reached for this product.");
      }
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      await updateSanitystockLevel(product._id, product.stockLevel - 1); // Update Sanity stockLevel
    }
  };
  const isInCart = (_id: string): boolean => {
    return cartItems.some((cartItem) => cartItem._id === _id);
  }
  const isInWishlist = (_id: string): boolean => {
    return wishlistItems.some((wishListItem) => wishListItem._id === _id);
  }

  const removeFromCart = async (_id: string) => {
    const productToRemove = cartItems.find((item) => item._id === _id);
    if (productToRemove) {
      await updateSanitystockLevel(_id, productToRemove.stockLevel + productToRemove.quantity); // Restore Sanity stockLevel
    }
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  const clearCart = async () => {
    for (const item of cartItems) {
      await updateSanitystockLevel(item._id, item.stockLevel + item.quantity); // Restore stockLevel for all items
    }
    setCartItems([]);
  };

  const addToWishlist = (product: Product) => {
    if (product) {
      console.log("product found here")
    } else {
      console.log("product not found");
      
    }
    const existingProduct = wishlistItems.find((item) => item._id === product._id);
    if (!existingProduct) {
      setWishlistItems((prev) => [...prev, product]);
    } else {
      alert("This product is already in your wishlist.");
    }
  };

  const removeFromWishlist = (_id: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item._id !== _id)
    );
  };

  const updateCartItemQuantity = (_id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const calculateShipping = async (country: string, city: string): Promise<number> => {
    try {
      const response = await fetch("/api/shippo/calculate-shipping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country, city, items: cartItems }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to calculate shipping");
      }
  
      const data = await response.json();
      return data.shippingCost;
    } catch (error) {
      console.error("Error calculating shipping:", error);
      return 0; // Fallback in case of error
    }
  };
  


  const updateWishlistItemQuantity = (_id: string, quantity: number) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 const updateSanitystockLevel = async (_id: string, updatedstockLevel: number) => {
    try {
      const res = await fetch(`/api/update-stockLevel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id, stockLevel: updatedstockLevel }),
      });
      if (!res.ok) {
        console.error("Failed to update stockLevel in Sanity.");
      }
    } catch (error) {
      console.error("Error calculating shipping:", error); // Log detailed error
      
    }
    
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        calculateShipping,
        getTotalPrice,
        updateCartItemQuantity,
        updateWishlistItemQuantity,
        isInCart,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
