import { useState } from 'react';
import PickCarButton from './PickCarButton/PickCarButton';
import CarBox from './CarBox/CarBox';
import { CAR_DATA } from './CarData/CarData';
import './PickCarComponent.scss';

export type PickCarType = {
    id: number;
    label: string;
};

const cars: PickCarType[] = [
    {
        id: 0,
        label: "Audi A1 S-Line"
    },
    {
        id: 1,
        label: "VW Golf 6"
    },
    {
        id: 2,
        label: "Toyota Camry"
    },
    {
        id: 3,
        label: "BMW 320 ModernLine"
    },
    {
        id: 4,
        label: "Mercedes-Benz GLK"
    },
    {
        id: 5,
        label: "VW Passat CC"
    }
];

const carsData = CAR_DATA;

const PickCarComponent = () => {

    const [activeCar, setActiveCar] = useState<PickCarType>(cars[0]);

    const getButtonClassname = (id: number) => (
        activeCar.id === id ? "colored-button" : ""
    );

    return (
        <>
            <section className='pick-section'>
                <div className='container'>
                    <div className='pick-container'>
                        <div className='pick-container__title'>
                            <h3>Vehicle Models</h3>
                            <h2>Our rental fleet</h2>
                            <p>
                                Choose from a variety of our amazing vehicles to rent for 
                                your next adventure or business trip
                            </p>
                        </div>

                        <div className='pick-container__car-content'>
                            {/* Pick car */}
                            <div className='pick-box'>
                                {cars.map(car => (
                                    <PickCarButton
                                        label={car.label}
                                        classname={getButtonClassname(car.id)}
                                        onClick={() => setActiveCar(car)}
                                    />
                                ))}
                            </div>
                            <CarBox data={carsData} id={activeCar.id} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export default PickCarComponent;