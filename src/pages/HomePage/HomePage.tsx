import BookCarSection from "../../components/BookCarSection/BookCarSection";
import PickCarComponent from "../../components/PickCarComponent/PickCarComponent";
import PlanTripComponent from "../../components/PlanTripComponent/PlanTripComponent";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";

const HomePage = () => (
    <>
        <WelcomeComponent />
        <BookCarSection />
        <PlanTripComponent />
        <PickCarComponent />
    </>
);

export default HomePage;