import { Fragment } from "react"
import { Outlet } from "react-router-dom"

function Home() {
    return (
        <Fragment>
            <h2>Home</h2>
            <Outlet/>
        </Fragment>
    )
}
export default Home