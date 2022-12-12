import React, { useContext } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Route";
import { AuthContext } from "../context";
function RouterApp() {
  const routeComponentsPrivate = privateRoutes.map(({ path, element }, key) => <Route exact path={path} element={element} key={key} />);
  const routeComponentsPuplic = publicRoutes.map(({ path, element }, key) => <Route exact path={path} element={element} key={key} />);
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    <>
      {isAuth ?
        <Routes>
          {routeComponentsPrivate}
          <Route path="*" element={<Navigate to="404" replace={true} />} />
          <Route path="/login" element={<Navigate to="/" replace={true} />} />
        </Routes>
        :
        <Routes>
          {routeComponentsPuplic}
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>}
    </>
  );
}

export default RouterApp;
