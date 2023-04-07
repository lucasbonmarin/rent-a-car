import { SyntheticEvent, useState } from "react";
import ModalPersonalSpecificInfo from "./ModalPersonalSpecificInfo/ModalPersonalSpecificInfo";

import './ModalPersonalInfo.scss';

export type ModalPersonalInfoProps = {
    confirmBooking: (event: SyntheticEvent) => void;
};

export type PersonalInfo = {
    name: string;
    lastName: string;
    phone: string;
    age: string;
    email: string;
    address: string;
    city: string;
    zipCode: string;
};

const isButtonDisabled = (personalInfo: PersonalInfo) => {
    console.log(Object.values(personalInfo));
    if (Object.values(personalInfo).includes('')) {
        return true;
    } else {
        return false;
    }
};

const initialPersonalInfo: PersonalInfo = {
    name: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: ""
};

const ModalPersonalInfo = ({
    confirmBooking
}: ModalPersonalInfoProps) => {

    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);

    const handleName = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, name: e.target.value }) as PersonalInfo);
    };

    const handleLastName = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, lastName: e.target.value }) as PersonalInfo);
    };

    const handlePhone = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, phone: e.target.value }) as PersonalInfo);
    };

    const handleAge = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, age: e.target.value }) as PersonalInfo);
    };

    const handleEmail = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, email: e.target.value }) as PersonalInfo);
    };

    const handleAddress = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, address: e.target.value }) as PersonalInfo);
    };

    const handleCity = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, city: e.target.value }) as PersonalInfo);
    };

    const handleZipCode = (e: any) => {
        setPersonalInfo(prevState => ({ ...prevState, zipCode: e.target.value }) as PersonalInfo);
    };

    const personalInputsFirstSection = [
        {
            label: "First Name",
            value: personalInfo?.name,
            onChange: handleName,
            type: "text",
            placeholder: "Enter your first name" 
        },
        {
            label: "Last Name",
            value: personalInfo?.lastName,
            onChange: handleLastName,
            type: "text",
            placeholder: "Enter your last name" 
        },
        {
            label: "Phone Number",
            value: personalInfo?.phone,
            onChange: handlePhone,
            type: "tel",
            placeholder: "Enter your phone number" 
        },
        {
            label: "Age",
            value: personalInfo?.age,
            onChange: handleAge,
            type: "number",
            placeholder: "18" 
        }
    ];

    const personalInputsSecondSection = [
        {
            label: "Email",
            value: personalInfo?.email,
            onChange: handleEmail,
            type: "email",
            placeholder: "Enter your email address" 
        },
        {
            label: "Address",
            value: personalInfo?.address,
            onChange: handleAddress,
            type: "text",
            placeholder: "Enter your street address" 
        }
    ];



    const personalInputsThirdSection = [
        {
            label: "City",
            value: personalInfo?.city,
            onChange: handleCity,
            type: "email",
            placeholder: "Enter your city" 
        },
        {
            label: "Zip Code",
            value: personalInfo?.zipCode,
            onChange: handleZipCode,
            type: "text",
            placeholder: "Enter your zip code" 
        }
    ];

    return (
        <div className="personal-info">

            <h4>Personal Information</h4>
            
            <form className="info-form">
                <div className="info-form__2col">
                    {personalInputsFirstSection.map(input => (
                        <ModalPersonalSpecificInfo
                            label={input.label}
                            value={input.value}
                            onChange={input.onChange}
                            type={input.type}
                            placeholder={input.placeholder}
                        />
                    ))}
                </div>
                <div className="info-form__1col">
                    {personalInputsSecondSection.map(input => (
                        <ModalPersonalSpecificInfo
                            label={input.label}
                            value={input.value}
                            onChange={input.onChange}
                            type={input.type}
                            placeholder={input.placeholder}
                        />
                    ))}
                </div>
                <div className="info-form__2col">
                    {personalInputsThirdSection.map(input => (
                        <ModalPersonalSpecificInfo
                            label={input.label}
                            value={input.value}
                            onChange={input.onChange}
                            type={input.type}
                            placeholder={input.placeholder}
                        />
                    ))}
                </div>

                <span className="info-form__checkbox">
                    <input type="checkbox" />
                    <p>Please send me latest news and updates</p>
                </span>

                <div className="reserve-button">
                    <button onClick={confirmBooking} disabled={isButtonDisabled(personalInfo)}>
                        Reserve Now
                    </button>
                </div>
            </form>

        </div>
    );

};

export default ModalPersonalInfo;