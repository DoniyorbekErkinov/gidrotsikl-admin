import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context";
import Dashboard from "../Pages/Home/Dashboard";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login'
import Users from "../Pages/Users";
function RouterApp() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    <>
      {isAuth ?
        <Routes>        
          <Route path="/" element={<Home/>} >
            <Route index element={<Dashboard/>} />          
            <Route path="/users" element={<Users/>} />  
            <Route path="*" element={<Navigate to="404" replace={true} />} />
          <Route path="/login" element={<Navigate to="/" replace={true} />} />        
          </Route>          
        </Routes>
        :
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>}
    </>
  );
}

export default RouterApp;