import { GiMountainRoad } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { RiCustomerService2Fill } from 'react-icons/ri';
import './PlanTripComponent.scss';

const PlanTripComponent = () => (
    <>
        <section className='plan-section'>
            <div className='container'>
                <div className='plan-container'>
                    <div className='plan-container__title'>
                        <h3>Plan your trip now</h3>
                        <h2>Quick & easy car rental</h2>
                    </div>

                    <div className='plan-container__boxes'>
                        <div className='plan-container__boxes__box'>
                            <AiFillCar className='plan-container__boxes__box__icon' />
                            <h3>Select Car</h3>
                            <p>
                                We offers a big range of vehicles for all your driving needs.
                                We have the perfect car to meet your needs
                            </p>
                        </div>

                        <div className='plan-container__boxes__box'>
                            <RiCustomerService2Fill className='plan-container__boxes__box__icon' />
                            <h3>Contact Operator</h3>
                            <p>
                                Our knowledgeable and friendly operators are always ready to 
                                help with any questions or concerns
                            </p>
                        </div>

                        <div className='plan-container__boxes__box'>
                            <GiMountainRoad className='plan-container__boxes__box__icon' />
                            <h3>Let's drive</h3>
                            <p>
                                Whether you're hitting the open road, we've got you covered 
                                with our wide range of cars
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default PlanTripComponent;