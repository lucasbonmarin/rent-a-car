import MainImg from '../../assets/images/choose-main.png';
import { FaChevronRight } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FaCarSide } from 'react-icons/fa';
import { BiHide } from 'react-icons/bi';

import './ChooseUs.scss';

const ChooseUs = () => (

    <>
        <section className='choose-section'>
            <div className='container'>
                <div className='choose-container'>
                    <img
                        className='choose-container__img'
                        src={MainImg}
                        alt='car_img'
                    />
                    <div className='text-container'>
                        <div className='text-container__left'>
                            <h4>Why Choose Us</h4>
                            <h2>Best valued deals you will ever find</h2>
                            <p>
                                Discover the best deals you'll ever find with our unbeatable 
                                offers. We're dedicated to providing you with the best value 
                                for your money, so you can enjoy top-quality services and products 
                                without breaking the bank. Our deals are designed to give you the 
                                ultimate renting experience, so you don't miss out on your chance to save big.
                            </p>
                            <a href="#home">
                                Find Details &nbsp;
                                <FaChevronRight style={{ position: 'relative', top: '.125em' }} />
                            </a>
                        </div>
                        <div className='text-container__right'>
                            <div className='text-container__right__box'>
                                <FaCarSide className='text-container__right__box__icon' />
                                <div className='text-container__right__box__text'>
                                    <h4>Cross Country Drive</h4>
                                    <p>
                                        Take your driving experience to the next level with our top-notch vehicles
                                         for your cross-country adventures.
                                    </p>
                                </div>
                            </div>
                            <div className='text-container__right__box'>
                                <HiOutlineCurrencyDollar className='text-container__right__box__icon' />
                                <div className='text-container__right__box__text'>
                                    <h4>All Inclusive Pricing</h4>
                                    <p>
                                        Get everything you need in one convenient, transparent price with our 
                                        all-inclusive pricing policy.
                                    </p>
                                </div>
                            </div>
                            <div className='text-container__right__box'>
                                <BiHide className='text-container__right__box__icon' />
                                <div className='text-container__right__box__text'>
                                    <h4>No Hidden Charges</h4>
                                    <p>
                                        Enjoy peace of mind with our no hidden charges policy. We believe 
                                        in transparent and honest pricing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

);

export default ChooseUs;