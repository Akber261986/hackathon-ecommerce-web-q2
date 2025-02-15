export interface ProductType {
  _id: string;
  name: string;
  price: number;
  discountedPrice: number;
  productCode?: string;
  image: string;
  rating: number;
  category: string | string[];
  isSale?: boolean;
  description?: string;
  colors: string[];
  tags:  string[];
  stockLevel: number;
  quantity: number;
}

// data is fetching by CMS sanity

export interface offerType {
  _id: string;
  title: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  image: string;
}
export interface blogPostType {
  _id: string;
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
  excerpt: string;
  description: string;
  headlines: string;
}

export interface blogProductType {
  _id: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
}
export interface Order {
  userId: string;
  totalPrice: number;
  status: string[];
  createdAt: Date;
}

export interface CartContextType {
  cartItems: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
  updateCartItemQuantity: (_id: string, stockLevel: number) => void;
  getTotalPrice: () => number;
  wishlistItems: ProductType[];
  addToWishlist: (product: ProductType) => void;
  removeFromWishlist: (_id: string) => void;
  updateWishlistItemQuantity: (_id: string, stockLevel: number) => void;
  isInCart: (_id: string) => boolean;
  isInWishlist: (_id: string) => boolean;
}
