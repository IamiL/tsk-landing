import "./navbar.css"
import {Link, NavLink} from "react-router-dom";

export default function Navbar({isOpen, setIsOpen}) {
    return <nav id='desktop-nav' className={isOpen ? 'navbar-open' : 'navbar-close'}>
        <div id='navbar-block'>
            <NavLink to={"/about"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     style={{whiteSpace: "nowrap"}}
                     onClick={() => setIsOpen(false)}>
                о компании
            </NavLink>
            <NavLink to={"/services"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     onClick={() => setIsOpen(false)}>
                услуги
            </NavLink>
            <NavLink to={"/cases"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     onClick={() => setIsOpen(false)}>
                проекты
            </NavLink>
            <NavLink to={"/licenses"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     onClick={() => setIsOpen(false)}>
                лицензии
            </NavLink>
            <NavLink to={"/reviews"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     onClick={() => setIsOpen(false)}>
                отзывы
            </NavLink>
            <NavLink to={"/contacts"} className={({isActive}) => (`fs8 i-b ${isActive ? 'navbar-active-link' : ''}`)}
                     onClick={() => setIsOpen(false)}>
                контакты
            </NavLink>
        </div>
        <Link to={"/contactus"} className='fs8 i-b' id='navbar-contactus'
              onClick={() => setIsOpen(false)}>
            связаться
        </Link>
    </nav>
}