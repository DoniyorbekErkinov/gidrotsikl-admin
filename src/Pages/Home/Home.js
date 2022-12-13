 /* eslint-disable */
import { Fragment, useContext, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import Sidebar from "../../Components/Sidebar"
import { SideBarContext } from "../../context/index";
import {
    getAuth, signOut
  } from 'firebase/auth';
import { AuthContext } from "../../context/index";
import { app } from '../../firebase/firebase';
const AUTH = getAuth(app)

import {useTranslation} from "react-i18next";
import i18next from "i18next";

function Home() {
    const {t} = useTranslation()
    const language = [
        {
            code: 'ru',
            name: 'Russian',
        },
        {
            code: 'en',
            name: 'English',
        },
        {
            code: 'uz',
            name: 'Uzbek',
        },
        {
            code: 'cr',
            name: 'Uzbek cr',
        }
    ]

    const changeLang = (event) => {
        debugger
        console.log(event)
        i18next.changeLanguage(event)
    }

    const { isCartOpen, setIsCartOpen } = useContext(SideBarContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    };

    const { isAuth, setIsAuth } = useContext(AuthContext)

    function Logout() {
        signOut(AUTH).then(() => {
            localStorage.removeItem('access_token')
            setIsAuth(!!localStorage.getItem('access_token'))
            return <Navigate to={'/login'} replace={true}/>
        })
        
    }

    return (
        <Fragment>            
            <div style={{display: 'flex'}}>
                <div style={{maxWidth: "300px"}}>            
                    <Sidebar/>
                </div>
                <Container>
                    <Navbar>
                        <Menu onClick={toggleIsCartOpen}>
                            <img src="/images/menu.png" alt=""/>
                        </Menu>
                        <RightSide>
                            <h1 onClick={Logout}>Logout</h1>
                        </RightSide>
                    </Navbar>
                    <Content>
                        <Outlet/>
                    </Content>
                </Container>
            </div>
        </Fragment>
    )
}
const Container = styled.div`
    width: 100%;
`;
const Navbar = styled.div`
    width: 100%;
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
        width: 100px;
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
const Content = styled.div`
    padding: 20px 60px;
`;
export default Home;