import { SyntheticEvent } from "react";

export type ModalPersonalSpecificInfoProps = {
    label: string;
    value?: string;
    onChange: (e: SyntheticEvent<Element, Event>) => void;
    type: string;
    placeholder: string;
};

const ModalPersonalSpecificInfo = ({
    label,
    value,
    onChange,
    type,
    placeholder
}: ModalPersonalSpecificInfoProps) => (

    <span>
        <label>
            {label} <b>*</b>
        </label>
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
        <p className="error-modal">This field is required.</p>
    </span>

);

export default ModalPersonalSpecificInfo;