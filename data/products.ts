export interface Product {
  slug: string
  name: string;
  price: number;
  oldPrice: number;
  code?: string;
  image: string;
  rating?: number | any;
  category: string | string[]; 
  isSale?: boolean;
  description?: string;
  colors?: string[];
  descruption?: string;
  quantity: number;
}

export const allProducts:Product[] = [
  {
    slug: "product1",
    name: "Vel elit euismod",
    price: 36.00,
    oldPrice: 42.00,
    code: "Y523201",
    image: "/images/image1.png",
    rating: 4,
    category: ["featuredProducts", "latestProducts"],
    quantity: 0,
  },
  {
    slug: "product2",
    name: "Ultrices condimentum imperdiet",
    price: 42.00,
    oldPrice: 48.00,
    code: "M523412",
    image: "/images/image2.png",
    quantity: 0,
    rating: 5,
    category: "featuredProducts"
  },
  {
    slug: "product3",
    name: "Vitae suspendisse sed",
    price: 26.00,
    oldPrice: 30.00,
    code: "S546201",
    image: "/images/image3.png",
    quantity: 0,
    rating: 3,
    category: "featuredProducts"
  },
  {
    slug: "product4",
    name: "Sed at fermentum",
    price: 23.00,
    oldPrice: 28.00,
    code: "Z623201",
    image: "/images/image4.png",
    isSale: true,
    quantity: 0,
    rating: 4,
    category: ["featuredProducts", "latestProducts"]
  },
  {
    slug: "product5",
    name: "Comfort Handy Craft",
    price: 42.00,
    oldPrice: 65.00,
    image: "/images/image5.png",
    rating: 4,
    quantity: 0,
    isSale: false,
    category: ["latestProducts"]
  },
  {
    slug: "product6",
    name: "Comfort Foam Chair",
    price: 42.00,
    oldPrice: 66.00,
    image: "/images/image6.png",
    quantity: 0,
    rating: 4,
    isSale: true,
    category: ["latestProducts"]
  },
  {
    slug: "product7",
    name: "Comfort Handy Craft",
    price: 42.00,
    oldPrice: 66.00,
    image: "/images/image8.png",
    quantity: 0,
    rating: 4,
    isSale: true,
    category: ["latestProducts", "topProducts"]
  },
  {
    slug: "product8",
    name: "Comfort Handy Craft",
    price: 42.00,
    oldPrice: 65.00,
    image: "/images/image9.png",
    quantity: 0,
    rating: 4,
    isSale: false,
    category: ["latestProducts"]
  },
  {
    slug: "product9",
    name: "Cantilever chair",
    quantity: 0,
    rating: 4,
    price: 72.00,
    oldPrice: 88.00,
    image: "/images/image9.png",
    category: ["trendingProducts"]
  },
  {
    slug: "product10" ,
    name: "Cantilever chair",
    quantity: 0,
    rating: 4,
    price: 40.00,
    oldPrice: 52.00,
    image: "/images/image12.png",
    category: ["trendingProducts"]
  },
  {
    slug: "product11" ,
    name: "Cantilever chair",
    quantity: 0,
    rating: 4,
    price: 36.00,
    oldPrice: 47.00,
    image: "/images/image11.png",
    category: ["trendingProducts" , "topProducts"]
  },
  {
    slug: "product12",
    name: "Cantilever chair",
    quantity: 0,
    rating: 4,
    price: 22.00,
    oldPrice: 27.00,
    image: "/images/image13.png",
    category: ["topProducts"]
  },
  {
    slug: "product13",
    name: "Sampara chair",
    quantity: 0,
    rating: 4,
    price: 28.00,
    oldPrice: 36.00,
    image: "/images/image20.png",
    category: ["topProducts"]
  },
  {
    slug: "product14",
    name: "Vel elit euismod",
    quantity: 0,
    rating: 4,
    price: 32.00,
    oldPrice: 42.00,
    image: "/products/p1.png",
    category: ["shopGrid", "trendingProducts"],
  },
  {
    slug: "product15",
    name: "Ultrices condimentum imperdiet",
    quantity: 0,
    rating: 4,
    price: 88.00,
    oldPrice: 96.00,
    image: "/products/p2.png",
    category: ["shopGrid"],
  },
  {
    slug: "product16",
    name: "Vitae suspendisse sed",
    quantity: 0,
    rating: 4,
    price: 57.00,
    oldPrice: 68.00,
    image: "/products/p3.png",
    category: ["shopGrid"],
  },
  {
    slug: "product17",
    name: "Sed at fermentum",
    quantity: 0,
    rating: 4,
    price: 70.00,
    oldPrice: 85.00,
    image: "/products/p4.png",
    category: ["shopGrid"],
  },
  {
    slug: "product18",
    name: "Fusce pellentesque at",
    quantity: 0,
    rating: 4,
    price: 26.00,
    oldPrice: 42.00,
    image: "/products/p5.png",
    category: ["shopGrid"],
  },
  {
    slug: "product19",
    name: "Vestibulum magna laoreet",
    quantity: 0,
    rating: 4,
    price: 42.00,
    oldPrice: 53.00,
    image: "/products/p6.png",
    category: ["shopGrid"],
  },
  {
    slug: "product20",
    name: "Sollicitudin amet orci",
    quantity: 0,
    rating: 4,
    price: 32.00,
    oldPrice: 38.00,
    image: "/products/p7.png",
    category: ["shopGrid"],
  },
  {
    slug: "product21",
    name: "Ultrices mauris sit",
    quantity: 0,
    rating: 4,
    price: 26.00,
    oldPrice: 42.00,
    image: "/products/p8.png",
    category: ["shopGrid"],
  },
  {
    slug: "product22",
    name: "Accumsan tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 4,
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/products/l1.jpg",
    category: ["shopList"],
  },
  {
    slug: "product23",
    name: "In nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 5,
    colors: ["bg-yellow-500", "bg-blue-500", "bg-pink-500", ],
    image: "/products/l2.jpg",
    category: ["shopList"],
  },
  {
    slug: "product24",
    name: "Vel sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 3,
    colors: ["bg-pink-500", "bg-blue-500", "bg-yellow-500",],
    image: "/products/l3.jpg",
    category: ["shopList"],
  },
  {
    slug: "product25",
    name: "Accumsan tincidunt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 4,
    colors: ["bg-blue-500", "bg-yellow-500", "bg-pink-500",],
    image: "/products/l4.jpg",
    category: ["shopList"],
  },
  {
    slug: "product26",
    name: "In nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 5,
    colors: ["bg-pink-500", "bg-yellow-500", "bg-blue-500"],
    image: "/products/l5.jpg",
    category: ["shopList"],
  },
  {
    slug: "product27",
    name: "Vel sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 4,
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/products/l6.jpg",
    category: ["shopList"],
  },
  {
    slug: "product28",
    name: "Dictum morbi",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 4,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls1.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product29",
    name: "Sodales sit",
    price: 35.00,
    oldPrice: 40.00,
    quantity: 0,
    rating: 5,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls2.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product30",
    name: "Nibh varius",
    price: 105.00,
    oldPrice: 120.00,
    quantity: 0,
    rating: 4,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls3.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product31",
    name: "Mauris quis",
    price: 66.00,
    oldPrice: 75.00,
    quantity: 0,
    rating: 3,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls4.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product32",
    name: "Morbi sagittis",
    price: 90.00,
    oldPrice: 102.00,
    quantity: 0,
    rating: 5,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls5.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product33",
    name: "Ultricies venenatis",
    price: 64.00,
    oldPrice: 77.00,
    quantity: 0,
    rating: 4,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls6.jpg",
    category: ["shopLeftSider"],
  },
  {
    slug: "product34",
    name: "Scelerisque dignissim",
    price: 26.00,
    oldPrice: 52.00,
    quantity: 0,
    rating: 2,
    descruption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    colors: ["bg-yellow-500", "bg-pink-500", "bg-blue-500"],
    image: "/images/sls7.jpg",
    category: ["shopLeftSider"]
  }
];

export const filterProductsByCategory = (category: string): typeof allProducts => {
  return allProducts.filter(product =>
    Array.isArray(product.category)
      ? product.category.includes(category) // Check for categories stored as arrays
      : product.category === category // Check for categories stored as strings
  );
};



// data/product.ts
export const cartproducts = [
  {
    slug: "product35",
    name: "Ultricies Vulputate",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart.jpg",
  },
  {
    slug: "product36",
    name: "Elit Faucibus Posuere",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart5.jpg",
  },
  {
    slug: "product37",
    name: "Ac Vitae Vestibulum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart2.jpg",
  },
  {
    slug: "product38",
    name: "Elit Massa Diam",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart3.jpg",
  },
  {
    slug: "product39",
    name: "Proin Pharetra Elementum",
    color: "Brown",
    size: "XL",
    price: 32.0,
    quantity: 1,
    image: "/cart/cart4.jpg",
  },
];

export const blogs = [
  {
    slug: "slug40",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "11 Aug 2023",
    category: "Art",
    author: "John Doe",
    image: "/images/mia.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    slug: "slug41",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "8 Aug 2023",
    category: "Travel",
    author: "Jane Smith",
    image: "/images/blog4.jpg",
    excerpt:
      "Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    slug: "slug42",
    title: "Cras vehicula libero sed dignissim.",
    date: "5 Aug 2023",
    category: "Lifestyle",
    author: "Emily Johnson",
    image: "/images/blog5.jpg",
    excerpt:
      "Etiam aliquet commodo elit, sed consequat sapien vehicula at. Nulla facilisi. Cras vehicula libero sed dignissim.",
  },
];

export interface CartContextType {
  cartItems: Product[];
  wishlistItems: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  removeFromWishlist: (slug: string) => void;
  clearCart: ()=> void;
  updateQuantity: (slug: string, quantity: number) => void;
  updateQuantityWishlist: (slug: string, quantity: number) => void;
  getTotalPrice: () => number;
}


