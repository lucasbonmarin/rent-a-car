import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export const Nav = styled.nav`
    background-color: transparent;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: var(--text-black);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--blue1);
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: var(--text-black);

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const Times = styled(FaTimes)`
    display: none;
    color: var(--text-black);

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;

        ${props => props.defaultChecked && `
            background: var(--white);
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        `}
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: var(--blue1);
    padding: 10px 22px;
    color: var(--white);
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--bg-gray);
        color: var(--text-black);
    }
`;

