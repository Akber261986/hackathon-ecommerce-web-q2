import ProductDetails from "@/components/ProductDetails";
import Tabs from "@/components/Tabs";
import RelatedProducts from "@/components/RelatedProducts";
import Link from "next/link";

const ProductDetail: React.FC = () => {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="py-28 space-y-2">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <div className="flex item center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Product Details</p>
        </div>
      </div>
      <ProductDetails />
      <Tabs />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
