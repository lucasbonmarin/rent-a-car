import { Bars,Times, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from "./NavbarElements/NavbarElements";
import CarIcon from '../../assets/icons/car_logo.svg';
import { useCallback, useState } from "react";

export type NavbarTab = {
    label: string;
    path: string;
};

const navbarTabs: NavbarTab[] = [
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Vehicle Models",
        path: "vehicle-models"
    },
    {
        label: "Testimonials",
        path: "/testimonials"
    },
    {
        label: "Our Team",
        path: "/our-team"
    },
    {
        label: "Contact",
        path: "/contact"
    },
]

const NavBar = () => {

    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setClicked(!clicked)
    }, [clicked]);

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={CarIcon} alt='logo' style={{height: '50px'}} />
                    <span style={{marginLeft: '10px'}}>
                        <strong>RENT</strong><br/>a car
                    </span>
                </NavLink>
                { clicked ? <Times onClick={handleClick} /> : <Bars onClick={handleClick} /> }
                <NavMenu defaultChecked={clicked}>
                    {navbarTabs.map(tab => (
                        <NavLink to={tab.path} onClick={() => clicked && handleClick()}>
                            {tab.label}
                        </NavLink>
                    ))}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default NavBar;