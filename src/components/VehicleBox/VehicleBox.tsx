import { FaStar } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { CarDataType } from '../PickCarComponent/CarData/CarData';
import { Link } from 'react-router-dom';
import './VehicleBox.scss';

export type VehicleBoxProps = {
    carData: CarDataType;
};

const VehicleBox = ({
    carData
}: VehicleBoxProps) => (

    <div className='vehicle-box'>
        <div className='vehicle-box__img'>
            <img src={carData.imgBox} alt='car-img' />
            <div className='vehicle-box__descr'>
                <div className='vehicle-box__descr__name-price'>
                    <div className='vehicle-box__descr__name-price__name'>
                        <p>{carData.name}</p>
                        <span>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                        </span>
                    </div>
                    <div className='vehicle-box__descr__name-price__price'>
                        <h4>${carData.price}</h4>
                        <p>per day</p>
                    </div>
                </div>
                <div className='vehicle-box__descr__name-price__details'>
                    <span>
                        <i><FaCarSide /></i> &nbsp; {carData.mark}
                    </span>
                    <span style={{ textAlign: 'right' }}>
                        {carData.doors} &nbsp; <i><FaCarSide /></i>
                    </span>
                    <span>
                    <i><FaCarSide /></i> &nbsp; {carData.transmission}
                    </span>
                    <span style={{ textAlign: 'right' }}>
                        {carData.fuel} &nbsp; <i><FaCarSide /></i>
                    </span>
                </div>
                <div className='vehicle-box__descr__name-price__btn'>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                    </Link>
                </div>
            </div>
        </div>
    </div>

);

export default VehicleBox;