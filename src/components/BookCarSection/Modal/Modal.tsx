import ModalCarInfo from "./ModalCarInfo/ModalCarInfo";
import { SyntheticEvent } from "react";
import { FaTimes } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { CarType } from "../BookCarSection";
import ModalPersonalInfo from "./ModalPersonalInfo/ModalPersonalInfo";

import './Modal.scss';

export type ModalProps = {
    isModalOpen: boolean;
    openModal: (event: SyntheticEvent) => void;
    confirmBooking: (event: SyntheticEvent) => void;
    carType: CarType | undefined;
    pickUp: string | undefined;
    dropOf: string | undefined;
    pickTime: string | undefined;
    dropTime: string | undefined;
};

const Modal = ({
    isModalOpen,
    openModal,
    confirmBooking,
    carType,
    pickUp,
    dropOf,
    pickTime,
    dropTime
}: ModalProps) => (

    <div className={`booking-modal ${isModalOpen ? "active-modal" : ""}`}>

        <div className="booking-modal__title">
            <h2>Complete Reservation</h2>
            <i onClick={openModal}><FaTimes /></i>
        </div>

        <div className="booking-modal__message">
            <h4>
                <i><BsFillInfoCircleFill /></i> Upon completing this
                reservation enquiry, you will receive :
            </h4>
            <p>
                Your rental voucher to produce on arrival at the rental desk and a 
                toll-free customer support number.
            </p>
        </div>

        <ModalCarInfo
            carType={carType}
            pickUp={pickUp}
            dropOf={dropOf}
            pickTime={pickTime}
            dropTime={dropTime}
        />

        <ModalPersonalInfo confirmBooking={confirmBooking} />

    </div>
);

export default Modal;