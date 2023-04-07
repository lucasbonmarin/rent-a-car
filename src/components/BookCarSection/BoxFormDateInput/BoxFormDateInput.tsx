import { ChangeEvent } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import './BoxFormDateInput.scss';

export type BoxFormDateInputProps = {
    label: string;
    htmlFor: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const BoxFormDateInput = ({
    label,
    htmlFor,
    value,
    onChange
}: BoxFormDateInputProps) => (

    <div className="date-box-form">
        <label htmlFor={htmlFor}>
            <FaCalendarAlt 
                style={{ top: '.125em', position: 'relative', color: 'var(--blue1)' }} 
            /> &nbsp; {label} <b>*</b>
        </label>
        <input
            id='picktime'
            value={value}
            onChange={onChange}
            type='date'
        />
    </div>

);

export default BoxFormDateInput;