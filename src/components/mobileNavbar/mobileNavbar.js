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
                <NavLink to={"/about"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         style={{whiteSpace: "nowrap"}}
                         viewTransition>
                    о компании
                </NavLink>
                <NavLink to={"/services"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         viewTransition>
                    услуги
                </NavLink>
                <NavLink to={"/cases"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         viewTransition>
                    проекты
                </NavLink>
                <NavLink to={"/licenses"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         viewTransition>
                    лицензии
                </NavLink>
                <NavLink to={"/reviews"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         viewTransition>
                    отзывы
                </NavLink>
                <NavLink to={"/contacts"}
                         onClick={() => setIsOpen(false)}
                         className={({isActive}) => (`fs8 mfs4 i-b ${isActive ? 'mobile-navbar-active-link' : ''}`)}
                         viewTransition>
                    контакты
                </NavLink>
            </div>
            <Link to={"/contactus"} className="fs8 mfs4 i-b"
                  onClick={() => setIsOpen(false)}
                  viewTransition>
                связаться
            </Link>
        </nav>
    </>
}