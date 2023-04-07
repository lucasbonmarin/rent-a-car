import BookBanner from "../../components/BookBanner/BookBanner";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import { CAR_DATA } from "../../components/PickCarComponent/CarData/CarData";
import VehicleBox from "../../components/VehicleBox/VehicleBox";
import './VehiclesPage.scss';

const carData = CAR_DATA;

const VehiclesPage = () => (

    <>
        <section className="models-section">
            <HeroComponent name="Vehicle Models" />
            <div className="models-div">
                {carData.map(car => (<VehicleBox carData={car} />))}
            </div>
            <BookBanner />
        </section>
    </>

);

export default VehiclesPage;