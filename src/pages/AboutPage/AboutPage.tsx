import AboutMain from '../../assets/images/about-main.jpg';
import BookBanner from '../../components/BookBanner/BookBanner';
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import PlanTripComponent from '../../components/PlanTripComponent/PlanTripComponent';
import CarTypesImg from '../../assets/images/car-types.png';
import RentalOutletsImg from '../../assets/images/rental-outlets.png';
import RepairShopsImg from '../../assets/images/repair-shop.png';

import './AboutPage.scss';

const AboutPage = () => (
    <>
        <section className="about-page">
            <HeroComponent name="About" />
            <div className="container">
                <div className="about-main">
                    <img
                        className="about-main__img"
                        src={AboutMain}
                        alt="car-renting"
                    />
                    <div className='about-main__text'>
                        <h3>About Company</h3>
                        <h2>You start the engine and your adventure begins</h2>
                        <p>
                            Certain but she but shyness why cottage. Guy the put instrument
                            sir entreaties affronting. Pretended exquisite see cordially the
                            you. Weeks quiet do vexed or whose. Motionless if no to
                            affronting imprudence no precaution. My indulged as disposal
                            strongly attended.
                        </p>
                        <div className='about-main__text__icons'>
                            <div className='about-main__text__icons__box'>
                                <img src={CarTypesImg} alt='car-icon' />
                                <span>
                                    <h4>20</h4>
                                    <p>Car Types</p>
                                </span>
                            </div>
                            <div className='about-main__text__icons__box'>
                                <img src={RentalOutletsImg} alt='car-icon' />
                                <span>
                                    <h4>85</h4>
                                    <p>Rental Outlets</p>
                                </span>
                            </div>
                            <div className='about-main__text__icons__box'>
                                <img src={RepairShopsImg} alt='car-icon' className='last-fk' />
                                <span>
                                    <h4>75</h4>
                                    <p>Repair Shops</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <PlanTripComponent />
            </div>
        </section>
        <BookBanner />
    </>
);

export default AboutPage;