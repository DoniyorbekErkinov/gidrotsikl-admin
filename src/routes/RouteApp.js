import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context/index";
import Dashboard from "../Pages/Home/Dashboard";
import Login from '../Pages/Login/Login'
import NotFound from "../Pages/Login/NotFound";
import Layout from "../Pages/Home/Layout";
import Shops from "../Pages/Shops/Shops";
import ReactFormikComponent from "../Pages/ReactFormik/ReactFormik";
function RouterApp() {
  const {isAuth} = useContext(AuthContext)
  return (
        isAuth ?
        <Routes>        
          <Route exact path="/" element={<Layout/>} >
            <Route  index element={<Dashboard/>} />          
            <Route path="/departments" element={<Shops/>}/>  
            <Route path="/formik" element={<ReactFormikComponent/>}/>  
            <Route path="/404" element={<NotFound/>}/>  
            <Route path="*" element={<Navigate to="404" replace={true} />} />
            <Route path="/login" element={<Navigate to="/" replace={true} />} />        
          </Route>          
        </Routes>
        :
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
  );
}

export default RouterApp;