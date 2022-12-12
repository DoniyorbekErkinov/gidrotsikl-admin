import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Sidebar"
import { CartContext } from "../../context/index";
function Home() {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    };
    return (
        <Fragment>            
            <div style={{display: 'flex'}}>
                <div style={{maxWidth: "300px"}}>            
                    <Sidebar/>
                </div>
                <div style={{width: "100%"}}>
                    <div style={{width: '100%'}} className={'bg-white w-full'}>
                        <h1 onClick={toggleIsCartOpen}>Navbar</h1>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </Fragment>
    )
}
export default Home