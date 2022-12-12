import React, { useContext } from "react";
import { CartContext } from "../context/index";
 function Sidebar() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    };

    return (
        <div className=" bg-gray-100 text-gray-700" >
        {
            isCartOpen ?
            <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style={{height: "100vh"}}>
                <header className="flex w-72 items-center justify-between border-b-2 border-gray-200 bg-white p-2">
                    <div className="flex items-center space-x-2">
                        <div>Logo</div>
                        <button type="button" className="text-3xl" onClick={toggleIsCartOpen}>13</button>
                    </div>
                </header>
                <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-2xl"><i className="bx bx-home"></i></span>
                    <span>Dashboard</span>
                </a>
    
                <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-2xl"><i className="bx bx-cart"></i></span>
                    <span>Cart</span>
                </a>
    
                <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                    <span>Shopping</span>
                </a>
    
                <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-2xl"><i className="bx bx-heart"></i></span>
                    <span>My Favourite</span>
                </a>
    
                <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-2xl"><i className="bx bx-user"></i></span>
                    <span>Profile</span>
                </a>
            </aside>
            : null
        }
        
    </div>
    );
}
export default Sidebar