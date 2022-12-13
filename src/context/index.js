import { createContext, useState } from "react";
let token = !!localStorage.getItem('access_token')
export const AuthContext = createContext(token);

export const SideBarContext = createContext({
    isCartOpen: true,
    setIsCartOpen: () => {}
});
export const SideBarProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(true);
    
    
    const value = {
        isCartOpen,
        setIsCartOpen
    };
    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
};