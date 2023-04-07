import { RiDoubleQuotesR } from 'react-icons/ri';
import SupermanImg from '../../assets/images/superman.jpg';
import BatmanImg from '../../assets/images/batman.jpg';

import './ClientTestimonials.scss';

const ClientTestimonials = () => (

    <>
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-container">
                    <div className="testimonials-container__title">
                        <h4>Reviewed by People</h4>
                        <h2>Client's Testimonials</h2>
                        <p>
                            Discover the positive impact we've made on the our clients 
                            by reading through their testimonials. Our client have experienced 
                            our service and results, and they're eager to share their positive 
                            experiences with you.
                        </p>
                    </div>

                    <div className='all-testimonials'>
                        <div className='all-testimonials__box'>
                            <span className='quotes-icon'>
                                <RiDoubleQuotesR />
                            </span>
                            <p>
                                "We rented a car from this website and had an amazing 
                                experience ! The booking was easy and the rental rates 
                                were very affordable."
                            </p>
                            <div className='all-testimonials__box__name'>
                                <div className='all-testimonials__box__name__profile'>
                                    <img 
                                        src={SupermanImg}
                                        alt='user_img'
                                    />
                                    <span>
                                        <h4>Superman</h4>
                                        <p>Metropolis</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='all-testimonials__box box-2'>
                            <span className='quotes-icon'>
                                <RiDoubleQuotesR />
                            </span>
                            <p>
                                "The car was in great condition and made our trip 
                                even better. Highly recommend for this car rental website !"
                            </p>
                            <div className='all-testimonials__box__name'>
                                <div className='all-testimonials__box__name__profile'>
                                    <img 
                                        src={BatmanImg}
                                        alt='user_img'
                                    />
                                    <span>
                                        <h4>Batman</h4>
                                        <p>Gotham City</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

);

export default ClientTestimonials;