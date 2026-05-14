import HeroSection from "@/features/home/components/HeroSection";
import HotDealsSection from "@/features/home/components/HotDealsSection";
import Banners from "@/features/home/components/Banners";
import DailyBestSells from "@/features/home/components/DailyBestSells";
import Features from "@/features/home/components/Features";
import NewProductSection from "@/features/home/components/NewProductSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const Home = () => {
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <>
      <div>total quantity is {quantity}</div>
      <HeroSection />
      <HotDealsSection />
      <NewProductSection />
      <Banners />
      <DailyBestSells />
      <Features />
    </>
  );
};

export default Home;
