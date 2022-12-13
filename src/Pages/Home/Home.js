 /* eslint-disable */
import { Fragment, useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import Sidebar from "../../Components/Sidebar"
import { CartContext } from "../../context/index";
import {
    getAuth, signOut
  } from 'firebase/auth';
import { AuthContext } from "../../context/index";
import { app } from '../../firebase/firebase';
const AUTH = getAuth(app)

function Home() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

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
                        <h1 onClick={Logout}>Logout</h1>
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
        &:hover {
            cursor: pointer;
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