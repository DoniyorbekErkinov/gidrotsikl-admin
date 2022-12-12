 /* eslint-disable */
import { useContext, useState } from 'react';
import styled from 'styled-components'
import {
    getAuth, signInWithEmailAndPassword, signOut
  } from 'firebase/auth';
import { AuthContext } from "../../context";
import { app } from '../../firebase/firebase';
import { Navigate } from 'react-router-dom';
const AUTH = getAuth(app)
function Login() {
    const [authData, setAuth] = useState({email: "", password: ""})
    const { isAuth, setIsAuth } = useContext(AuthContext)

    function Login() {
        signInWithEmailAndPassword(AUTH, authData.email, authData.password).then(res => {
            localStorage.setItem('access_token', res.user.accessToken)
            setIsAuth(!!localStorage.getItem('access_token'))
            return <Navigate to={'/'} replace/>
          }).catch(err => {
            console.log(err);
          })
    }
    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value }
        setAuth({ ...authData, ...inputs })        
      }
    return (
        <Container>
            <Content>
                <Image>
                    <img src="/images/login.svg" alt=""/>
                </Image>
                <Form>
                    <h1>Log In</h1>
                    <UserName>
                        <label htmlFor='email'>Email</label>
                        <input 
                            onChange={event => handleInputs(event)} 
                            type="text"
                            placeholder='admin@admin.admin'
                            id='email' 
                            name='email' />
                    </UserName>
                    <Password>
                        <label htmlFor='password'>Password</label>
                        <input 
                            onChange={event => handleInputs(event)} 
                            type="password"
                            id='password' 
                            name='password'/>
                    </Password>
                    <Submit onClick={Login}>Log In</Submit>
                </Form>
            </Content>
            <p style={{textAlign: 'center', background: '#e5e5eb', padding: 5}}>Login: admin@admin.admin </p>
            <p style={{textAlign: 'center', background: '#e5e5eb', padding: 5}}>Password: admin12345 </p>
        </Container>
    )
}
const Container = styled.div`
    padding: 0px;
    width: 100%;
    height: 100vh;
    background: #e5e5eb;
`;
const Content = styled.div`
    max-width: 1128px;
    height: 90%;
    margin: auto; 
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    @media(max-width: 708px) {
        padding: 0px 35px;
    }
`;
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    max-width: 550px;     
    img {
        width: 500px;
    }
    @media(max-width: 708px) {
        display: none;
    }
`;
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;  
    width: 380px;
    height: 360px;
    background: #fdfbfb;
    margin: auto;
    border-radius: 25px;
    padding: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    h1 {
        font-size: 30px;
        margin: -10px 0px 10px 0px;
    }
`;
const UserName = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
    input {
        width: 75%;
        margin: auto;
        margin-top: 10px;
        margin-bottom:10px;
        height: 25px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
        padding: 6px 15px;
        font-size: 16px;
    }    
    label {
        width: 75%;
        margin-bottom: 5px;
        margin-top: 10px;
        margin: auto;
        font-size: 20px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.6);
    }
`;
const Password = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
    input {
        width: 75%;
        margin-top: 10px;
        margin-bottom:10px ;
        height: 25px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
        padding: 6px 15px;
        font-size: 16px;
    }
    label {
        width: 75%;
        margin-bottom: 5px;
        margin-top: 10px;
        margin: auto;
        font-size: 20px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.6);
    }
`;
const Submit = styled.button`
    margin-top: 20px;
    width: 45%;
    height: 30px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.6);
`;
export default Login

// <img style={{width: 500}} src="/images/login.svg" alt=""/>