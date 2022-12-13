import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context/index";
import Dashboard from "../Pages/Home/Dashboard";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login'
import Departments from "../Pages/Departments";
import NotFound from "../Pages/Login/NotFound";
function RouterApp() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
        isAuth ?
        <Routes>        
          <Route exact path="/" element={<Home/>} >
            <Route  index element={<Dashboard/>} />          
            <Route path="/departments" element={<Departments/>}/>  
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