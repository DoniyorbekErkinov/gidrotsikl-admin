/* eslint-disable */
import {Fragment, useContext, useEffect, useState} from "react"
import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import Sidebar from "../../Components/Sidebar"
import { SideBarContext } from "../../context/index";
import {getAuth, signOut} from 'firebase/auth';
import { AuthContext } from "../../context/index";
import { app } from '../../firebase/firebase';
import {useTranslation} from "react-i18next";
import menus from "../../context/menu"
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
        if(window.innerWidth < 700) {
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
    useEffect(() => {
        console.log(menus)
    }, [])
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
                    <Outlet/>
                    <TOP>
                        <button 
                            onClick={() => {
                                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                            }}
                        >
                            1
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
const Side = styled.div`
    width: 300px; 
    margin-right: 250px;
    @media(max-width: 700px) {
        width: 0;
        margin-right: 0px;
    }
`;
const SideDesktop = styled.div`
    width: 300px; 
    margin-right: -50px;
    @media(max-width: 700px) {
        width: 0;
        margin-right: 0px;
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
    bottom: 50px;
    right: 50px;
    button {
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50px;
        color: #ffffff;
        background: green;
    }
    @media(max-width: 700px) {
        bottom: 40px;
        right: 40px;
        button {
            width: 45px;
            height: 45px;
            border: none;
            border-radius: 50px;
            color: #ffffff;
            background: green;
        }
    }
`;
export default Layout;