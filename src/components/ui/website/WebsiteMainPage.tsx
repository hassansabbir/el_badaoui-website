import Banner from "./home/banner/Banner";
import ContactSection from "./home/ContactSection";
import EstimateYourWorkMain from "./home/estimateYourWork/EstimateYourWorkMain";
import HomeStates from "./home/HomeStates";
import MeetTheExpert from "./home/meetTheexperts/MeetTheExpert";
import OurProjects from "./home/ourProjects/OurProjects";
import ReviewSection from "./home/review/ReviewSection";

const WebsiteMainPage = () => {
  return (
    <div>
      <Banner />
      <EstimateYourWorkMain />
      <OurProjects />
      <ReviewSection />
      <MeetTheExpert />
      <HomeStates />
      <ContactSection />
    </div>
  );
};

export default WebsiteMainPage;
