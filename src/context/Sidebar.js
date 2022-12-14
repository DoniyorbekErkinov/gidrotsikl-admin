import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SideBarContext } from "./index";
 function Sidebar() {
    const { isMenuOpen, setIsMenuOpen } = useContext(SideBarContext);
    const { t } = useTranslation()
    let activeStyle = {
        color: "green",
        background: "#F3F4F6",
        
    };
    return (
        isMenuOpen ?
        <Aside>
            <header className="flex mb-5 items-center">
                <Logo >
                    LOGO
                </Logo>
            </header>
            <NavLink 
                to={'/'} 
                className="flex mt-2 items-center text-lg space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600" 
                style={({ isActive }) => isActive ? activeStyle : undefined}
            >
                <span className="text-2xl"><i className="bx bx-home"></i></span>
                <span>{ t('menu.dashboard') }</span>
            </NavLink>
            <NavLink 
                to={'/departments'} 
                className="flex mt-2 items-center text-lg space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600" 
                style={({ isActive }) => isActive ? activeStyle : undefined}
            >
                <span className="text-2xl"><i className="bx bx-home"></i></span>
                <span>{ t('menu.shops') }</span>
            </NavLink>
            <NavLink 
                to={'/formik'} 
                className="flex mt-2 items-center text-lg space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600" 
                style={({ isActive }) => isActive ? activeStyle : undefined}
            >
                <span className="text-2xl"><i className="bx bx-home"></i></span>
                <span>Formik</span>
            </NavLink>
        </Aside>
        : null
    );
}
const Aside = styled.aside`
    height: 100%;
    min-height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    background: white;
    width: 300px;
    transition: 1s;
    @media(max-width: 900px) {
        width: 35%;
        height: 100%;
        min-height: 100%;
        margin-top: 0px;
        position: fixed
    }
    @media(max-width: 700px) {
        width: 75%;
        height: 100%;
        min-height: 100%;
        margin-top: 0px;
        position: fixed
    }
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 30px;
    font-weight: 600;
    font-style: italic;
`;
export default Sidebar