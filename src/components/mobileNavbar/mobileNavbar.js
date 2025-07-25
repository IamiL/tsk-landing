import "./mobileNavbar.css"
import {Link, NavLink} from "react-router-dom";
import {useAppContext} from "@/context/context";

export default function MobileNavbar({setVisible}) {
    const {isOpen, setIsOpen} = useAppContext();

    // const hmm = useVisibleHook()

    // useEffect(() => {
    //     () => {
    //         setVisible(hmm)
    //     }
    // }, [hmm])

    return <>
        <div id='header-back-layer' style={isOpen ? {opacity: '1'} : {opacity: '0'}}/>

        <div className="menu-container">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={isOpen}
                   onChange={() => {
                       setIsOpen(!isOpen);
                       // const block = document.getElementById('mainp-sec1-btn');
                       // if (block) {
                       //     console.log("блок есть");
                       //     // if (!open) {
                       //     //     block.classList.add('disnone');
                       //     //     block.style
                       //     // } else {
                       //     //     block.classList.remove('disnone');
                       //     // }
                       // } else {
                       //     console.log("блока нет");
                       // }
                   }}
            />
            <label htmlFor="menu-toggle" className="menu-button">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </label>
        </div>
        <nav id='mobile-nav' className={`${isOpen ? 'mobile-nav-open' : 'mobile-nav-close'}`}>
            <div id='navbar-block'>
                <NavLink to={"/aboutPage"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         style={{whiteSpace: "nowrap"}}>
                    о компании
                </NavLink>
                <NavLink to={"/servicesPage"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    услуги
                </NavLink>
                <NavLink to={"/casesPage"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    проекты
                </NavLink>
                <NavLink to={"/licensesPage"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    лицензии
                </NavLink>
                <NavLink to={"/reviewsPage"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    отзывы
                </NavLink>
                <NavLink to={"/contactsPage"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}>
                    контакты
                </NavLink>
            </div>
            <Link to={"/contactusPage"} className="fs8 mfs4 i-b"
                  onClick={() => setIsOpen(false)}>
                связаться
            </Link>
        </nav>
    </>
}