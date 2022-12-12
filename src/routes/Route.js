import Home from "../Pages/Home/Home.js";
import Login from "../Pages/Login/Login"
export const privateRoutes = [
    {path: "/", element: <Home/>, exact: true}
]
export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},
]
