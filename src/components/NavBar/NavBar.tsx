import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from "./NavbarElements/NavbarElements";
import CarIcon from '../../assets/icons/car_logo.svg';

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

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={CarIcon} alt='logo' style={{height: '50px'}} />
                    <span style={{marginLeft: '10px'}}>
                        <strong>RENT</strong><br/>a car
                    </span>
                </NavLink>
                <Bars />
                <NavMenu>
                    {navbarTabs.map(tab => (
                        <NavLink to={tab.path}>
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