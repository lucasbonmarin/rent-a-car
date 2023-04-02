import CarIcon from '../../assets/icons/car_logo.svg';
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import './NavBar.scss';

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
                <div className={`mobile-navbar ${clicked ? "open-nav" : ""}`}>
                    <div className="mobile-navbar__close" onClick={handleClick}>
                        <FaTimes />
                    </div>
                    <ul className="mobile-navbar__links">
                        {navbarTabs.map(tab => (
                            <li>
                                <Link onClick={handleClick} to={tab.path}>
                                    {tab.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* desktop */}
                <div className="navbar">
                    <div className="navbar__img">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={CarIcon} alt='logo' style={{height: '50px'}} />
                        </Link>
                    </div>
                    <ul className="navbar__links">
                        {navbarTabs.map(tab => (
                            <li>
                                <Link to={tab.path}>
                                    {tab.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__buttons">
                        <Link className="navbar__buttons__sign-in" to="/">
                            Sign In
                        </Link>
                        <Link className="navbar__buttons__register" to="/">
                            Register
                        </Link>
                    </div>

                    { /* mobile */ }
                    <div className="mobile-hamb" onClick={handleClick}>
                        <FaBars />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;