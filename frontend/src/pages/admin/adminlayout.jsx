import { Link, Outlet } from "react-router-dom"

function Adminlayout(){
    return(
        <>
        <nav>
            <Link to ="/admin/dashboard">Dashboard</Link>
            <Link to ="/admin/details">AdminDetails</Link>
            <Link to ="/admin/settings">AdminSettings</Link>

        </nav>
        <Outlet/>
        </>
    )
}
export default Adminlayout