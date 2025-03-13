import RentFormSection from '@/components/pages/homepage/sections/RentFormSection';
import MainCategoriesSection from '@/components/pages/homepage/sections/MainCategoriesSection';
import HowToStepsSection from '@/components/pages/homepage/sections/HowToStepsSection';
import NewProductsSection from '@/components/pages/homepage/sections/NewProductsSection';
import DownloadApplicationSection from '@/components/general-sections/ DownloadApplicationSection';

const HomePage = () => {
  return (
    <>
      <RentFormSection />
      <MainCategoriesSection />
      <HowToStepsSection />
      <NewProductsSection />
      <DownloadApplicationSection />
    </>  
  );
}

export default HomePage;