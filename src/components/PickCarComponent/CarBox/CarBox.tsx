import { useState } from "react";
import { CarDataType } from "../CarData/CarData";

import './CarBox.scss';

export type CarBoxProps = {
    data: CarDataType[];
    id: number;
};

const CarBox = ({
    data,
    id
}: CarBoxProps) => {

    const [loading, setLoading] = useState<boolean>(true);

    const carData = data[id];

    return (

        <>
            <div key={id} className="box-cars">
                {/* car */}
                <div className="pick-car">
                    {loading && <span className="loader" />}
                    <img 
                        style={{ display: loading ? "none" : "block" }}
                        src={carData.img}
                        alt="car_img"
                        onLoad={() => setLoading(false)}
                    />
                </div>

                {/* description */}
                <div className="pick-description">
                    <div className="pick-description__price">
                        <span>${carData.price}</span>/ rent per day
                    </div>
                    <div className="pick-description__table">
                        {Object.keys(carData).map(key => (
                            !['name', 'price', 'img', 'imgBox'].includes(key) &&
                            <div className="pick-description__table__col">
                                <span style={{ textTransform: 'capitalize' }}>{key}</span>
                                <span>{(carData as any)[key]}</span>
                            </div>
                        ))}
                    </div>
                    <a className="cta-btn" href="#booking-section">
                        Reserve Now
                    </a>
                </div>
            </div>
        </>

    );
    
};

export default CarBox;