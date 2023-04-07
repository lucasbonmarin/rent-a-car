import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from 'react-icons/fa';
import { CarType } from "../../BookCarSection";
import ModalCarSpecificInfo from "./ModalCarSpecificInfo/ModalCarSpecificInfo";

import './ModalCarInfo.scss';

export type ModalCarInfoProps = {
    carType: CarType | undefined;
    pickUp: string | undefined;
    dropOf: string | undefined;
    pickTime: string | undefined;
    dropTime: string | undefined;
};

const ModalCarInfo = ({
    carType,
    pickUp,
    dropOf,
    pickTime,
    dropTime
}: ModalCarInfoProps) => (

    <div className="car-info">
                
        <div className="dates-div">

            <ModalCarSpecificInfo
                icon={<MdLocationOn />} 
                h5label="Location & Date" 
                h6label="Pick-Up Date & Time"
                value={`${pickTime} / `} 
                isDateInfo={true} 
            />

            <ModalCarSpecificInfo 
                icon={<MdLocationOn />}
                h6label="Drop-Off Date & Time"
                value={`${dropTime} / `} 
                isDateInfo={true} 
            />

            <ModalCarSpecificInfo 
                icon={<FaCalendarAlt />}
                h6label="Pick-Up Location"
                value={pickUp} 
                isDateInfo={false} 
            />

            <ModalCarSpecificInfo 
                icon={<FaCalendarAlt />}
                h6label="Drop-Off Location"
                value={dropOf} 
                isDateInfo={false} 
            />
            
        </div>

        <div className="car-info__model">
            <h5>
                <span>Car -</span> {carType?.label}
            </h5>
            <img src={carType?.img} alt="car_img" />
        </div>

    </div>

);

export default ModalCarInfo;