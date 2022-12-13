import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const CartContext = createContext({
    isCartOpen: true,
    setIsCartOpen: () => {}
});
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(true);
    
    
    const value = {
        isCartOpen,
        setIsCartOpen
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};