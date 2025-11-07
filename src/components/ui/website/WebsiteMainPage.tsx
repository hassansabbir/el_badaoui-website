import Banner from "./home/banner/Banner";
import EstimateYourWorkMain from "./home/estimateYourWork/EstimateYourWorkMain";
import OurProjects from "./home/ourProjects/OurProjects";
import ReviewSection from "./home/review/ReviewSection";

const WebsiteMainPage = () => {
  return (
    <div>
      <Banner />
      <EstimateYourWorkMain />
      <OurProjects />
      <ReviewSection />
    </div>
  );
};

export default WebsiteMainPage;
