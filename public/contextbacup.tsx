// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { ProductType, CartContextType } from "@/app/Types";

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<ProductType[]>([]);
//   const [wishlistItems, setWishlistItems] = useState<ProductType[]>([]);

//   // Load cart and wishlist from localStorage on initial render
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cartItems");
//     const storedWishlist = localStorage.getItem("wishlistItems");

//     if (storedCart) setCartItems(JSON.parse(storedCart));
//     if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist));
//   }, []);

//   // Save cartItems to localStorage whenever cartItems change
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Save wishlistItems to localStorage whenever wishlistItems change
//   useEffect(() => {
//     localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToCart = async (product: ProductType) => {
//     const existingProduct = cartItems.find((item) => item._id  === product._id);

//     if (existingProduct) {
//       if (existingProduct.stockLevel < product.stockLevel) {
//         setCartItems((prev) =>
//           prev.map((item) =>
//             item._id === product._id
//               ? { ...item, stockLevel: item.stockLevel + 1 }
//               : item
//           )
//         );
//         await updateSanitystockLevel(product._id, product.stockLevel - 1); // Update Sanity stockLevel
//       } else {
//         alert("stockLevel limit reached for this product.");
//       }
//     } else {
//       setCartItems((prev) => [...prev, { ...product, stockLevel: 1 }]);
//       await updateSanitystockLevel(product._id, product.stockLevel - 1); // Update Sanity stockLevel
//     }
//   };
//   const isInCart = (_id: string): boolean => {
//     return cartItems.some((cartItem) => cartItem._id === _id);
//   }
//   const isInWishlist = (_id: string): boolean => {
//     return wishlistItems.some((wishListItem) => wishListItem._id === _id);
//   }

//   const removeFromCart = async (_id: string) => {
//     const productToRemove = cartItems.find((item) => item._id === _id);
//     if (productToRemove) {
//       await updateSanitystockLevel(_id, productToRemove.stockLevel + productToRemove.stockLevel); // Restore Sanity stockLevel
//     }
//     setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
//   };

//   const clearCart = async () => {
//     for (const item of cartItems) {
//       await updateSanitystockLevel(item._id, item.stockLevel + item.stockLevel); // Restore stockLevel for all items
//     }
//     setCartItems([]);
//   };

//   const addToWishlist = (product: ProductType) => {
//     if (product) {
//       console.log("product found here")
//     } else {
//       console.log("product not found");
      
//     }
//     const existingProduct = wishlistItems.find((item) => item._id === product._id);
//     if (!existingProduct) {
//       setWishlistItems((prev) => [...prev, product]);
//     } else {
//       alert("This product is already in your wishlist.");
//     }
//   };

//   const removeFromWishlist = (_id: string) => {
//     setWishlistItems((prevItems) =>
//       prevItems.filter((item) => item._id !== _id)
//     );
//   };

//   const updateCartItemstockLevel = (_id: string, stockLevel: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === _id ? { ...item, stockLevel: Math.max(1, stockLevel) } : item
//       )
//     );
//   };
  
//   const updateWishlistItemstockLevel = (_id: string, stockLevel: number) => {
//     setWishlistItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === _id ? { ...item, stockLevel: Math.max(1, stockLevel) } : item
//       )
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
//   };

//  const updateSanitystockLevel = async (_id: string, updatedstockLevel: number) => {
//     try {
//       const res = await fetch(`/api/update-stock`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ _id, stockLevel: updatedstockLevel }),
//       });
//       if (!res.ok) {
//         console.error("Failed to update stockLevel in Sanity.");
//       }
//     } catch (error) {
//       console.error("Error calculating shipping:", error); // Log detailed error
      
//     }
    
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         wishlistItems,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         addToWishlist,
//         removeFromWishlist,
//         getTotalPrice,
//         updateCartItemstockLevel,
//         updateWishlistItemstockLevel,
//         isInCart,
//         isInWishlist,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
