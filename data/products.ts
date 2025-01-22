export interface AllProductType 
  {
    slug: string;
    name: string;
    price: number;
    oldPrice: number;
    code?: string;
    image: string;
    rating: number ;
    category: string | string[];
    isSale?: boolean;
    description?: string;
    colors: string[];
    quantity: number;
    stock: number;
    size?: string[];
  };


// export const allProducts: AllProductType[] = [
//   {
//     slug: "product1",
//     name: "Vel elit euismod",
//     price: 36.0,
//     oldPrice: 42.0,
//     code: "Y523201",
//     image: "/images/image1.png",
//     rating: 4,
//     category: ["featuredProducts", "latestProducts"],
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//   },
//   {
//     slug: "product2",
//     name: "Ultrices condimentum imperdiet",
//     price: 42.0,
//     oldPrice: 48.0,
//     code: "M523412",
//     image: "/images/image2.png",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 5,
//     category: "featuredProducts",
//   },
//   {
//     slug: "product3",
//     name: "Vitae suspendisse sed",
//     price: 26.0,
//     oldPrice: 30.0,
//     code: "S546201",
//     image: "/images/image3.png",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 3,
//     category: "featuredProducts",
//   },
//   {
//     slug: "product4",
//     name: "Sed at fermentum",
//     price: 23.0,
//     oldPrice: 28.0,
//     code: "Z623201",
//     image: "/images/image4.png",
//     isSale: true,
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     category: ["featuredProducts", "latestProducts"],
//   },
//   {
//     slug: "product5",
//     name: "Comfort Handy Craft",
//     price: 42.0,
//     oldPrice: 65.0,
//     image: "/images/image5.png",
//     rating: 4,
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     isSale: false,
//     category: ["latestProducts"],
//   },
//   {
//     slug: "product6",
//     name: "Comfort Foam Chair",
//     price: 42.0,
//     oldPrice: 66.0,
//     image: "/images/image6.png",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     isSale: true,
//     category: ["latestProducts"],
//   },
//   {
//     slug: "product7",
//     name: "Comfort Handy Craft",
//     price: 42.0,
//     oldPrice: 66.0,
//     image: "/images/image8.png",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     isSale: true,
//     category: ["latestProducts", "topProducts"],
//   },
//   {
//     slug: "product8",
//     name: "Comfort Handy Craft",
//     price: 42.0,
//     oldPrice: 65.0,
//     image: "/images/image9.png",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     isSale: false,
//     category: ["latestProducts"],
//   },
//   {
//     slug: "product9",
//     name: "Cantilever chair",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 72.0,
//     oldPrice: 88.0,
//     image: "/images/image9.png",
//     category: ["trendingProducts"],
//   },
//   {
//     slug: "product10",
//     name: "Cantilever chair",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 40.0,
//     oldPrice: 52.0,
//     image: "/images/image12.png",
//     category: ["trendingProducts"],
//   },
//   {
//     slug: "product11",
//     name: "Cantilever chair",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 36.0,
//     oldPrice: 47.0,
//     image: "/images/image11.png",
//     category: ["trendingProducts", "topProducts"],
//   },
//   {
//     slug: "product12",
//     name: "Cantilever chair",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 22.0,
//     oldPrice: 27.0,
//     image: "/images/image13.png",
//     category: ["topProducts"],
//   },
//   {
//     slug: "product13",
//     name: "Sampara chair",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 28.0,
//     oldPrice: 36.0,
//     image: "/images/image20.png",
//     category: ["topProducts"],
//   },
//   {
//     slug: "product14",
//     name: "Vel elit euismod",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 32.0,
//     oldPrice: 42.0,
//     image: "/products/p1.png",
//     category: ["shopGrid", "trendingProducts"],
//   },
//   {
//     slug: "product15",
//     name: "Ultrices condimentum imperdiet",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 88.0,
//     oldPrice: 96.0,
//     image: "/products/p2.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product16",
//     name: "Vitae suspendisse sed",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 57.0,
//     oldPrice: 68.0,
//     image: "/products/p3.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product17",
//     name: "Sed at fermentum",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 70.0,
//     oldPrice: 85.0,
//     image: "/products/p4.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product18",
//     name: "Fusce pellentesque at",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 26.0,
//     oldPrice: 42.0,
//     image: "/products/p5.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product19",
//     name: "Vestibulum magna laoreet",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 42.0,
//     oldPrice: 53.0,
//     image: "/products/p6.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product20",
//     name: "Sollicitudin amet orci",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 32.0,
//     oldPrice: 38.0,
//     image: "/products/p7.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product21",
//     name: "Ultrices mauris sit",
//     stock: 0,
// quantity: 0,
//     colors: ["Red", "Blue", "Green"],
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     price: 26.0,
//     oldPrice: 42.0,
//     image: "/products/p8.png",
//     category: ["shopGrid"],
//   },
//   {
//     slug: "product22",
//     name: "Accumsan tincidunt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/products/l1.jpg",
//     category: ["shopList"],
//   },
//   {
//     slug: "product23",
//     name: "In nulla",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 5,
//     colors: ["bg-yellow-500", "bg-blue-500", "bg-pink-500"],
//     image: "/products/l2.jpg",
//     category: ["shopList"],
//   },
//   {
//     slug: "product24",
//     name: "Vel sem",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 3,
//     colors: ["bg-pink-500", "bg-blue-500", "bg-yellow-500"],
//     image: "/products/l3.jpg",
//     category: ["shopList"],
//   },
//   {
//     slug: "product25",
//     name: "Accumsan tincidunt",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     colors: ["bg-blue-500", "bg-yellow-500", "bg-pink-500"],
//     image: "/products/l4.jpg",
//     category: ["shopList"],
//   },
//   {
//     slug: "product26",
//     name: "In nulla",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 5,
//     colors: ["bg-pink-500", "bg-yellow-500", "bg-blue-500"],
//     image: "/products/l5.jpg",
//     category: ["shopList"],
//   },
//   {
//     slug: "product27",
//     name: "Vel sem",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/products/l6.jpg",
//     category: ["shopList"],
//   },
//   {
//     slug: "product28",
//     name: "Dictum morbi",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls1.jpg",
//     category: ["shopLeftSider"],
//   },
//   {
//     slug: "product29",
//     name: "Sodales sit",
//     price: 35.0,
//     oldPrice: 40.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 5,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls2.jpg",
//     category: ["shopLeftSider"],
//   },
//   {
//     slug: "product30",
//     name: "Nibh varius",
//     price: 105.0,
//     oldPrice: 120.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls3.jpg",
//     category: ["shopLeftSider"],
//   },
//   {
//     slug: "product31",
//     name: "Mauris quis",
//     price: 66.0,
//     oldPrice: 75.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 3,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls4.jpg",
//     category: ["shopLeftSider"],
//   },
//   {
//     slug: "product32",
//     name: "Morbi sagittis",
//     price: 90.0,
//     oldPrice: 102.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 5,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls5.jpg",
//     category: ["shopLeftSider"],
//   },
//   {
//     slug: "product33",
//     name: "Ultricies venenatis",
//     price: 64.0,
//     oldPrice: 77.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls6.jpg",
//     category: ["shopLeftSider"],
//   },
//   {
//     slug: "product34",
//     name: "Scelerisque dignissim",
//     price: 26.0,
//     oldPrice: 52.0,
//     stock: 0,
// quantity: 0,
//     size: ["x", "xl", "2xl"],
//     rating: 2,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
//     image: "/images/sls7.jpg",
//     category: ["shopLeftSider"],
//   },
// ];

// export const filterProductsByCategory = (
//   category: string
// ): typeof allProducts => {
//   return allProducts.filter(
//     (product) =>
//       Array.isArray(product.category)
//         ? product.category.includes(category) // Check for categories stored as arrays
//         : product.category === category // Check for categories stored as strings
//   );
// };

// data is fetching by CMS sanity


export interface offerType {
  slug: string;
  title: string;
  color: string;
  size: string;
  price: number;
  stock: number;
  image: string;
}
export interface blogPostType {
  slug: string;
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
  slug: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  image: string;
}

export interface Product {
  _id: string;
  name: string;
  image:string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  quantity: number;
  category: string | string[];
}


export interface CartContextType {
  cartItems: Product[]; 
  addToCart: (product: Product) => void; 
  removeFromCart: (slug: string) => void; 
  clearCart: () => void;
  updateCartItemQuantity: (slug: string, quantity: number) => void; 
  getTotalPrice: () => number;
  calculateShipping: (country:string, city:string)=> Promise<number>;
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (slug: string) => void;
  updateWishlistItemQuantity: (slug: string, quantity: number) => void;
  isInCart: (_id: string) => boolean;
  isInWishlist: (_id: string) => boolean;
}


