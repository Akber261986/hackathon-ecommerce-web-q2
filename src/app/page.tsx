import Blog from "@/components/LatestBlog";
import DiscountSection from "@/components/DiscountSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import LatestProduct from "@/components/LatestProduct";
import TopCatagories from "@/components/TopCatagories";
import TrendindProducts from "@/components/TrendindProducts";
import UniqueFeature from "@/components/UniqueFeature";
import SearchBar from "@/components/Search";

export default function Home() {
  return (
    <div className="text-[#151875] font-sans">
      {/* <SearchBar/> */}
      <Hero/>
      <FeaturedProducts/>
      <LatestProduct/>
      <UniqueFeature/>
      <TrendindProducts/>
      <DiscountSection/>
      <TopCatagories/>
      <Blog/>
    </div>
  );
}