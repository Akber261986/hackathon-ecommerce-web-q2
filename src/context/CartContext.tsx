"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AllProductType, CartContextType } from "../../data/products";
import { error } from "console";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<AllProductType[]>([]);
  const [wishlistItems, setWishlistItems] = useState<AllProductType[]>([]);

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

  const addToCart = async (product: AllProductType) => {
    const existingProduct = cartItems.find((item) => item.slug === product.slug);

    if (existingProduct) {
      if (existingProduct.quantity < product.stock) {
        setCartItems((prev) =>
          prev.map((item) =>
            item.slug === product.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
        await updateSanityStock(product.slug, product.stock - 1); // Update Sanity stock
      } else {
        alert("Stock limit reached for this product.");
      }
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      await updateSanityStock(product.slug, product.stock - 1); // Update Sanity stock
    }
  };

  const removeFromCart = async (slug: string) => {
    const productToRemove = cartItems.find((item) => item.slug === slug);
    if (productToRemove) {
      await updateSanityStock(slug, productToRemove.stock + productToRemove.quantity); // Restore Sanity stock
    }
    setCartItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
  };

  const clearCart = async () => {
    for (const item of cartItems) {
      await updateSanityStock(item.slug, item.stock + item.quantity); // Restore stock for all items
    }
    setCartItems([]);
  };

  const addToWishlist = (product: AllProductType) => {
    const existingProduct = wishlistItems.find((item) => item.slug === product.slug);
    if (!existingProduct) {
      setWishlistItems((prev) => [...prev, product]);
    } else {
      alert("This product is already in your wishlist.");
    }
  };

  const removeFromWishlist = (slug: string) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.slug !== slug)
    );
  };

  const updateCartItemQuantity = (slug: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
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
  


  const updateWishlistItemQuantity = (slug: string, quantity: number) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 const updateSanityStock = async (slug: string, updatedStock: number) => {
    try {
      const res = await fetch(`/api/update-stock`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, stock: updatedStock }),
      });
      if (!res.ok) {
        console.error("Failed to update stock in Sanity.");
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
