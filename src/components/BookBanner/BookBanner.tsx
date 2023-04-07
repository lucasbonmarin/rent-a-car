import { BsFillTelephoneFill } from 'react-icons/bs';
import './BookBanner.scss';

const BookBanner = () => (

    <div className='book-banner'>
        <div className='book-banner__overlay' />
        <div className='container'>
            <div className='text-content'>
                <h2>Book a car by getting in touch with us</h2>
                <span>
                    <i><BsFillTelephoneFill /></i>
                    <h3>(123) -456-789</h3>
                </span>
            </div>
        </div>
    </div>

);

export default BookBanner;