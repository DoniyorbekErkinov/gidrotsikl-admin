import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/index";
 function Sidebar() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    };
    let activeStyle = {
        color: "green",
        background: "#F3F4F6",
        
    };
    return (
        <div className=" bg-gray-100 text-gray-700" >
        {
            isCartOpen ?
            <aside className="flex w-72 flex-col space-y-2 bg-white p-2" style={{height: "100vh"}}>
                <header className="flex w-72 mb-5 items-center justify-between px-2">
                    <div className="flex items-center text-3xl space-x-2 text-bold">
                        Logo
                    </div>
                </header>
                <NavLink 
                    to={'/'} 
                    className="flex items-center text-lg space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                >
                    <span className="text-2xl"><i className="bx bx-home"></i></span>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink 
                    to={'/users'} 
                    className="flex items-center text-lg space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                >
                    <span className="text-2xl"><i className="bx bx-home"></i></span>
                    <span>Users</span>
                </NavLink>
            </aside>
            : null
        }
        
    </div>
    );
}
export default Sidebar