import { createContext, useState } from "react";
let token = !!localStorage.getItem('access_token')
export const AuthContext = createContext(token);

export const SideBarContext = createContext({
    isMenuOpen: true,
    setIsMenuOpen: () => {}
});
export const SideBarProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    
    
    const value = {
        isMenuOpen,
        setIsMenuOpen
    };
    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
};