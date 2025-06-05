import Footer from "./Components/Footer";
import TopNav from "./Components/TopNav"
import { Outlet } from "react-router-dom";
const Layout=()=>{
    return(

        <>
        <TopNav/>
        <hr />
        <Outlet/>

        <hr />
        <Footer/>
        </>
    )
}
export default Layout;