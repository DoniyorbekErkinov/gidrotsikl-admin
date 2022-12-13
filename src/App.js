/* eslint-disable */
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthContext } from "./context";
import RouterApp from "./routes/RouteApp";

import './App.css';
import { useEffect, useState } from "react";
function App() {    
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('access_token'))
  
  // setIsAuth()
  return (   
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Router>
        <RouterApp/>
      </Router>
    </AuthContext.Provider>
         
  );
}

export default App;
