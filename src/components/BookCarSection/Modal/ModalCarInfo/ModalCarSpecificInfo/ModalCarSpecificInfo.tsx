import { ReactNode } from "react";

import './ModalCarSpecificInfo.scss';

export type ModalCarSpecificInfoProps = {
    icon: ReactNode;
    h5label?: string;
    h6label: string;
    value: string | undefined;
    isDateInfo: boolean;
};

const ModalCarSpecificInfo = ({
    icon,
    h5label,
    h6label,
    value,
    isDateInfo
}: ModalCarSpecificInfoProps) => (

    <div className="modal-car-info">
        {h5label && <h5>{h5label}</h5>}
        <span>
            <i>{icon}</i>
            <div>
                <h6>{h6label}</h6>
                <p>
                    {value}
                    {isDateInfo && <input type="time" className="input-time" />}
                </p>
            </div>
        </span>
    </div>

);

export default ModalCarSpecificInfo;