import { ChangeEvent, ReactNode } from 'react';
import './BoxForm.scss';

export type BoxFormProps = {
    label: string;
    icon: ReactNode;
    selectSentence: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
};

const BoxForm = ({
    label,
    icon,
    selectSentence,
    value,
    onChange,
    options
}: BoxFormProps) => (
    
    <div className="specific-box-form">
        <label>
            {icon} &nbsp; {label} <b>*</b>
        </label>
        <select value={value} onChange={onChange}>
            <option>{selectSentence}</option>
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </select>
    </div>

);

export default BoxForm;