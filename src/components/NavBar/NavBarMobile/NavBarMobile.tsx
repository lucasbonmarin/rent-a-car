import { NavbarTab } from "../NavBar";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

import './NavBarMobile.scss';

export type NavBarMobileProps = {
    navbarTabs: NavbarTab[];
    clicked: boolean;
    handleClick: () => void;
};

const NavBarMobile = ({ 
    navbarTabs,
    clicked,
    handleClick
 }: NavBarMobileProps) => (
    <div className={`mobile-navbar ${clicked ? "open-nav" : ""}`}>
        <div className="mobile-navbar__close" onClick={handleClick}>
            <FaTimes />
        </div>
        <ul className="mobile-navbar__links">
            {navbarTabs.map((tab, index) => (
                <li key={index}>
                    <Link onClick={handleClick} to={tab.path}>
                        {tab.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
 );

export default NavBarMobile;