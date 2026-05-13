import HeroSection from "@/features/home/components/HeroSection";
import HotDealsSection from "@/features/home/components/HotDealsSection";
import Banners from "@/features/home/components/Banners";
import DailyBestSells from "@/features/home/components/DailyBestSells";
import Features from "@/features/home/components/Features";
import NewProductSection from "@/features/home/components/NewProductSection";

const Home = () => {
  return (
    <>
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
