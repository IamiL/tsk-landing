import Header from "../header/header";
import Footer from "../footer/footer";

export default function Wrapper({children, location}) {
    return <>
        <Header location={location}/>
        {children}
        <Footer/>
    </>
}