
// CSS
import '../../../css/components/buttons/navbarItem.css';

// Packages
import { Link } from "react-router-dom";

export default function NavbarItem({ icon: Icon, label, to }) {
    return (
        <Link to={to} className="container-navbar-item">
            <Icon className="navbar-icon" />
            <span>{label}</span>
        </Link>
    );
}