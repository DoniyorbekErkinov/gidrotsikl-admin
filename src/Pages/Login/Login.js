 /* eslint-disable */
 import { useContext, useEffect, useState } from 'react';
 import styled from 'styled-components'
 import {
     getAuth, signInWithEmailAndPassword
   } from 'firebase/auth';
 import { AuthContext } from "../../context/index";
 import { app } from '../../firebase/firebase';
 import { Navigate } from 'react-router-dom';
 import { useFormik } from 'formik';
 import { useTranslation } from 'react-i18next';
 import { toast, ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 const AUTH = getAuth(app)
 function Login() {
     const { isAuth, setIsAuth } = useContext(AuthContext)
     const { t } = useTranslation()
     const initialValues = {
         email: "",
         password: ""
     }
     const onSubmit = values => {    
         signInWithEmailAndPassword(AUTH, values.email, values.password).then(res => {  
            const id = toast.success(t('messages.login_seccess'))    
            toast.update(id, {
                type: "success", 
                autoClose: 2000,
            });                                                
            localStorage.setItem('access_token', res.user.accessToken)
            setIsAuth(!!localStorage.getItem('access_token'))
            return <Navigate to={'/'} replace/>
          }).catch((error) => {              
            let errorId = toast.error(error.message)            
             toast.error(errorId, {
                 position: toast.POSITION.TOP_RIGHT,
                autoClose: 800,
             });
           })          
     }
     const validate = (values) => {
         let errors = {}
 
         if(!values.email) {
             errors.email =  t('errors.in_correct_email')
         }
 
         if(!values.password) {
             errors.password = t('errors.in_correct_password')
         }
         return errors
     }
     const formik = useFormik({        
         initialValues,
         validate,
         onSubmit
     })
     return (
         <Container>            
             <Content>
                 <Image>
                     <img src="/images/login.svg" alt=""/>
                 </Image>
                 <Form onSubmit={formik.handleSubmit}>
                     <h1>{t('forms.login')}</h1>
                     <UserName>
                         <label htmlFor='email'>{t('forms.email')}</label>
                         <input 
                             type="text"
                             placeholder='admin@admin.admin'
                             id='email' 
                             name='email'
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.email}
                         />
                         {formik.touched.email && formik.errors.email ? <span className="text-xs text-center text-red-500">{formik.errors.email} *</span> : null}
                     </UserName>
                     <Password>
                         <label htmlFor='password'>{t('forms.password')}</label>
                         <input                              
                             type="password"
                             id='password' 
                             name='password'
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.password}
                         />
                     {formik.touched.password && formik.errors.password ? <span className="text-xs text-center text-red-500">{formik.errors.password} *</span> : null}
                     </Password>
                     <Submit type='submit'>{t('actions.login')}</Submit>
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
 const Form = styled.form`
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
 