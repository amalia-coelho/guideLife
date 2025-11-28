// CSS
import '../../../css/components/layout/navbar.css';
import { FaHome, FaUser, FaBrain } from "react-icons/fa";

// Components
import NavbarItem from "../buttons/NavbarItem";

export default function Navbar() {
    return (
        <div className="container-navbar">
            <nav>
               <NavbarItem icon={FaHome} label="Home" to="/" />
               {/* <NavbarItem icon={FaListCheck} label="Tasks" to="/tasks" /> */}
               <NavbarItem icon={FaBrain} label="Projects" to="/projects" />
               {/* <NavbarItem icon={FaGear} label="Settings" to="/settings" /> */}
               <NavbarItem icon={FaUser} label="User" to="/user" />
            </nav>
        </div>
    );
}