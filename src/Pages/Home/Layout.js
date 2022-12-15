/* eslint-disable */
import {Fragment, useContext, useEffect, useState} from "react"
import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import Sidebar from "../../context/Sidebar"
import { SideBarContext } from "../../context/index";
import {getAuth, signOut} from 'firebase/auth';
import { AuthContext } from "../../context/index";
import { app } from '../../firebase/firebase';
import {useTranslation} from "react-i18next";
const AUTH = getAuth(app)
import i18next from "i18next";
function Layout() {
    const {t} = useTranslation()
    const { isMenuOpen, setIsMenuOpen } = useContext(SideBarContext);
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const language = [
        {
            code: 'uz',
            name: "O'zbek lotin",
        },
        {
            code: 'cr',
            name: 'Ўзбек крилл',
        },
        {
            code: 'ru',
            name: 'Русский',
        },
        {
            code: 'en',
            name: 'English',
        },

    ]

    const changeLang = (event) => {
        localStorage.setItem('lang', event.target.value)
        i18next.changeLanguage(event.target.value)
    }

    const toggleIsCartOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    };
    const toggleIsCartOpenInMobile = () => {
        if(window.innerWidth < 900) {
            setIsMenuOpen(false)
        }
    };

    function Logout() {
        signOut(AUTH).then(() => {
            localStorage.removeItem('access_token')
            setIsAuth(!!localStorage.getItem('access_token'))
            return <Navigate to={'/login'} replace={true}/>
        })

    }
    return (
        <Fragment>
            <Wrapper>
                <Navbar>
                    <Menu onClick={toggleIsCartOpen}>
                        <img src="/images/menu.png" alt=""/>
                    </Menu>
                    <RightSide>
                        <Languages className={'languages'}>
                            <select onChange={changeLang}>
                                <option>Languages</option>
                                {language.map((option) => (
                                    <option value={option.code} key={option.code} >
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </Languages>
                        <h1 onClick={Logout}>Logout</h1>
                    </RightSide>
                </Navbar>
                <Content onClick={toggleIsCartOpenInMobile}>
                    {isMenuOpen 
                        ?
                            <Side >
                                <Sidebar/>
                            </Side> 
                        : 
                            <SideDesktop>
                                <Sidebar/>
                            </SideDesktop>
                    }
                    {isMenuOpen 
                        ?
                        <LayoutWrapperDesktop>
                            <Outlet/>
                        </LayoutWrapperDesktop>                        
                        : 
                        <LayoutWrapper>
                            <Outlet/>
                        </LayoutWrapper>
                        
                    }
                    
                    <TOP>
                        <button 
                            onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }}
                        >
                            <img src="/images/up-arrow-svgrepo-com.svg" alt=""/>
                        </button>
                    </TOP>
                </Content>
            </Wrapper>
        </Fragment>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    height: 100%;
    display: flex;
    margin-top: 50px;
`;
const LayoutWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    margin-left: -40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
   
`;
const LayoutWrapperDesktop = styled.div`
    margin: 0 auto;
    margin-left: 320px !important;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media(min-width: 1280px) {
        width: 100%;
        margin-right: 0px;
        padding: 0;
        display: flex;
    }
    @media(max-width: 1280px) {
        width: 100%;
        margin-right: 0px;
        padding: 0;
        flex-direction: row;
    }
`;
const Side = styled.div`
    width: 0; 
    
`;
const SideDesktop = styled.div`
    width: 0; 
    margin-right: 0;
    padding: 10px 30px;
    @media(max-width: 1280px) {
        width: 0px;
        margin-right: 0px;
        padding: 0;
    }
    @media(max-width: 700px) {
        width: 0;
        margin-right: 0px;
        padding: 0;
    }
`;
const Navbar = styled.div`
    width: 100%;
    position: fixed;
    height: 50px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    h1 {
        font-size: 26px;
        font-weight: 600;
        font-style: italic;
        &:hover {
            cursor: pointer;
        }
    }
    
`;
const RightSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    select {
        margin-right: 10px; 
        height: 30px;
        width: 120px;
        border: 1px solid blue;
        border-radius: 50px;
        -webkit-appearance: none;
        text-align: center;
        &:focus {
            border: 1px solid blue;
        }    
        option {
            background: white;
            border: none;
            height: 15px;
            font-size: 18px;
            padding: 20px;
        } 
    }
`;
const Languages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: transparent;
    font-weight: 500;
    padding: 0 !important;
    @media(max-width: 700px) {
        display: none
    }
`;
const Menu = styled.div`
    max-width: 80px;
    img {
        width: 45px;
        height: 40px;
        transform: rotate(180deg);
        &:hover {
            cursor: pointer;
        }
    }
`;
const TOP = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    button {
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50px;
        background: #ffffff;        
        img {
                width: 30px;
                height: 30px;
                background: transparent;
                margin: auto;
            }
    }
    @media(max-width: 700px) {
        bottom: 40px;
        right: 40px;
        button {
            width: 85px;
            height: 85px;
            border: none;
            border-radius: 50px;
            background: #f6f6f6;
            img {
                width: 105px;
                height: 35px;
                transform: rotate(270deg);
            }
        }
    }
`;
export default Layout;