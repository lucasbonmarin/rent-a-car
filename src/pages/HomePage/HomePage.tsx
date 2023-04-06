import Banner from "../../components/Banner/Banner";
import BookCarSection from "../../components/BookCarSection/BookCarSection";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import ClientTestimonials from "../../components/ClientTestimonials/ClientTestimonials";
import Faq from "../../components/Faq/Faq";
import PickCarComponent from "../../components/PickCarComponent/PickCarComponent";
import PlanTripComponent from "../../components/PlanTripComponent/PlanTripComponent";
import WelcomeComponent from "../../components/WelcomeComponent/WelcomeComponent";

const HomePage = () => (
    <>
        <WelcomeComponent />
        <BookCarSection />
        <PlanTripComponent />
        <PickCarComponent />
        <Banner />
        <ChooseUs />
        <ClientTestimonials />
        <Faq />
    </>
);

export default HomePage;