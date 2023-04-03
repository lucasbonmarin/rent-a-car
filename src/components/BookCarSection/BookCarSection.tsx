import { ChangeEvent, useEffect, useState } from "react";
import BoxForm from "./BoxForm/BoxForm";
import { FaCar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import BoxFormDateInput from "./BoxFormDateInput/BoxFormDateInput";
import { SyntheticEvent } from "react";
import { FaTimes } from 'react-icons/fa';
import Modal from "./Modal/Modal";

import CarAudi from "../../assets/images/cars/audia1.jpg";
import CarGolf from "../../assets/images/cars/golf6.jpg";
import CarToyota from "../../assets/images/cars/toyotacamry.jpg";
import CarBmw from "../../assets/images/cars/bmw320.jpg";
import CarMercedes from "../../assets/images/cars/benz.jpg";
import CarPassat from "../../assets/images/cars/passatcc.jpg";

import './BookCarSection.scss';

export type CarType = {
    label: string;
    img: string;
};

export enum CarTypeName {
    Audi = "Audi A1 S-Line",
    Golf = "W Golf 6",
    Toyota = "Toyota Camry",
    Bmw = "BMW 320 ModernLine",
    Mercedes = "Mercedes-Benz GLK",
    Passat = "VW Passat CC"
}

const carTypeOptions = [
    CarTypeName.Audi,
    CarTypeName.Golf,
    CarTypeName.Toyota,
    CarTypeName.Bmw,
    CarTypeName.Mercedes,
    CarTypeName.Passat
];

const pickUpOptions = [
    "Paris",
    "Lyon",
    "Marseille",
    "Lille",
    "Rennes"
];

const hideMessage = (className: string) => {
    const msg = document.querySelector(className) as HTMLElement;
    msg.style.display = "none";
};

const dropOfOptions = pickUpOptions;

const getCarType = (carName: string) => {
    switch(carName) {
        case CarTypeName.Audi:
            return { label: CarTypeName.Audi, img: CarAudi };
        case CarTypeName.Golf:
            return { label: CarTypeName.Golf, img: CarGolf };
        case CarTypeName.Toyota:
            return { label: CarTypeName.Toyota, img: CarToyota };
        case CarTypeName.Bmw:
            return { label: CarTypeName.Bmw, img: CarBmw };
        case CarTypeName.Mercedes:
            return { label: CarTypeName.Mercedes, img: CarMercedes };
        case CarTypeName.Passat:
            return { label: CarTypeName.Passat, img: CarPassat };
    };
};

const BookCarSection = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [carType, setCarType] = useState<CarType | undefined>(undefined);
    const [pickUp, setPickUp] = useState<string | undefined>(undefined);
    const [dropOf, setDropOf] = useState<string | undefined>(undefined);
    const [pickTime, setPickTime] = useState<string | undefined>(undefined);
    const [dropTime, setDropTime] = useState<string | undefined>(undefined);

    // disable page scroll when modal is displayed
    useEffect(() => {
        document.body.style.overflowY = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    const handleCarType = (e: ChangeEvent<HTMLSelectElement>) => {
        setCarType(getCarType(e.target.value));
    };

    const handlePickUp = (e: ChangeEvent<HTMLSelectElement>) => {
        setPickUp(e.target.value);
    };

    const handleDropOf = (e: ChangeEvent<HTMLSelectElement>) => {
        setDropOf(e.target.value);
    };

    const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
        setPickTime(e.target.value);
    };

    const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
        setDropTime(e.target.value);
    };

    const openModal = (event: SyntheticEvent) => {
        event.preventDefault();
        const errorMsg = document.querySelector(".error-message") as HTMLElement;
        if (!carType || !pickUp || !dropOf || !pickTime || !dropTime) {
            errorMsg.style.display = "flex";
        } else {
            setIsModalOpen(!isModalOpen);
            errorMsg.style.display = "none";
        }
    };

    const confirmBooking = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsModalOpen(!isModalOpen);
        const doneMsg = document.querySelector(".booking-done") as HTMLElement;
        doneMsg.style.display = "flex";
    };

    return (
        <>
            <section id="booking-section" className="book-section">

                {/* overlay */}
                <div 
                    onClick={openModal} 
                    className={`modal-overlay ${isModalOpen ? "active-modal" : ""}`} 
                />

                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">

                            <h2>Book a car</h2>

                            <p className="error-message">
                                All fields required ! <i onClick={() => hideMessage(".error-message")}><FaTimes /></i>
                            </p>

                            <p className="booking-done">
                                Check your email to confirm an order.{" "}
                                <i onClick={() => hideMessage(".booking-done")}><FaTimes /></i>
                            </p>

                            <form className="box-form">

                                <BoxForm
                                    label="Select Your Car Type"
                                    icon={<FaCar style={{ top: '.125em', position: 'relative', color: 'var(--blue1)' }} />}
                                    selectSentence="Select Your Car Type"
                                    value={carType?.label}
                                    onChange={handleCarType}
                                    options={carTypeOptions}
                                />

                                <BoxForm
                                    label="Pick-up"
                                    icon={<MdLocationOn style={{ top: '.125em', position: 'relative', color: 'var(--blue1)' }} />}
                                    selectSentence="Select pick up location"
                                    value={pickUp}
                                    onChange={handlePickUp}
                                    options={pickUpOptions}
                                />

                                <BoxForm
                                    label="Drop-of"
                                    icon={<MdLocationOn style={{ top: '.125em', position: 'relative', color: 'var(--blue1)' }} />}
                                    selectSentence="Select drop off location"
                                    value={dropOf}
                                    onChange={handleDropOf}
                                    options={dropOfOptions}
                                />

                                <BoxFormDateInput 
                                    label="Pick-up"
                                    htmlFor="picktime"
                                    value={pickTime}
                                    onChange={handlePickTime}
                                />

                                <BoxFormDateInput 
                                    label="Drop-of"
                                    htmlFor="droptime"
                                    value={dropTime}
                                    onChange={handleDropTime}
                                />

                                <button onClick={openModal}>
                                    Search
                                </button>

                            </form>

                        </div>
                    </div>
                </div>

            </section>

            <Modal 
                isModalOpen={isModalOpen} 
                openModal={openModal}
                confirmBooking={confirmBooking}
                carType={carType}
                pickUp={pickUp}
                dropOf={dropOf}
                pickTime={pickTime}
                dropTime={dropTime}
            />
        </>
    );

};

export default BookCarSection;