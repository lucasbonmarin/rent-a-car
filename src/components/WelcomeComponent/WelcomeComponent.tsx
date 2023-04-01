import { Link } from 'react-router-dom';
import WelcomeBg from '../../assets/images/welcome-bg.png';
import BlueCar from '../../assets/images/blue-car.png';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaChevronRight, FaAngleUp } from 'react-icons/fa';
import { useGoUp } from '../../utils/hooks/use-go-up.hook';

import './WelcomeComponent.scss';

const onBookClick = () => {
    document
        .querySelector("#booking-section")?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const WelcomeComponent = () => {
    
    const goUp = useGoUp();

    return (
        <>
            <section id='home' className='welcome-section'>
                <div className='container'>
                    <img className='welcome-bg' src={WelcomeBg} alt='welcome-bg' />
                    <div className='welcome-content'>
                        <div className='welcome-content__text'>
                            <h4>Plan your trip now</h4>
                            <h1>
                                Save <span>big</span> with our car rental
                            </h1>
                            <p>
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </p>
                            <div className='welcome-content__text__btns'>
                                <Link 
                                    onClick={onBookClick}
                                    className='welcome-content__text__btns__book-ride'
                                    to='/'
                                >
                                    Book Ride &nbsp; <BsCheckCircleFill style={{ top: '.125em', position: 'relative' }} />
                                </Link>
                                <Link className='welcome-content__text__btns__learn-more' to='/'>
                                    Learn Mode &nbsp; <FaChevronRight style={{ top: '.125em', position: 'relative' }} />
                                </Link>
                            </div>
                        </div>
                        <img src={BlueCar} alt='car-img' className='welcome-content__car-img' />
                    </div>
                </div>

                <div 
                    onClick={scrollToTop} 
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                >
                    <FaAngleUp />
                </div>

            </section>
        </>
    );
};

export default WelcomeComponent;