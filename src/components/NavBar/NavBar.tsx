import { useState } from "react";
import NavBarMobile from './NavBarMobile/NavBarMobile';
import NavBarDesktop from './NavBarDesktop/NavBarDesktop';

export type NavbarTab = {
    label: string;
    path: string;
};

const navbarTabs: NavbarTab[] = [
    {
        label: "Home",
        path: "/"
    },
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

    const handleClick = () => {
        setClicked(!clicked)
    };

    return (
        <>
            <nav>
                
                {/* mobile */}
                <NavBarMobile navbarTabs={navbarTabs} clicked={clicked} handleClick={handleClick} />

                {/* desktop */}
                <NavBarDesktop navbarTabs={navbarTabs} handleClick={handleClick} />

            </nav>
        </>
    );
}

export default NavBar;