import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"

const Layout = () => (
    <div>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </div>
);

export default Layout;