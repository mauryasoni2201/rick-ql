import { NavLink } from 'react-router-dom';

const NavItem = ({ to, label, end = false, onClick }) => {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={onClick}
        >
            {label}
        </NavLink>
    );
};

export default NavItem;
