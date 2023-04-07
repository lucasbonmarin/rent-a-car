import CarIcon from '../../../assets/icons/car_logo.svg';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { NavbarTab } from '../NavBar';

import './NavBarDesktop.scss';

export type NavBarDesktopProps = {
    navbarTabs: NavbarTab[];
    handleClick: () => void;
};

const NavBarDesktop = ({
    navbarTabs,
    handleClick
}: NavBarDesktopProps) => (
    <div className="navbar">
        <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={CarIcon} alt='logo' style={{height: '50px'}} />
            </Link>
        </div>
        <ul className="navbar__links">
            {navbarTabs.map((tab, index) => (
                <li key={index}>
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
);

export default NavBarDesktop;
