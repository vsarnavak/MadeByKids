import { NavLink } from "react-router-dom";

export default function NavItem({ title, href }){
  
  const navClass = 'block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-black';
  
  return (
    <li>
        <NavLink 
          className={navClass}
          exact="true"
          activeclassname="active"
          to={href}>{title}
        </NavLink>
      </li>
)}