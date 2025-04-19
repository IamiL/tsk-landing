'use client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomePage from "@/pages/home/page";
import AboutPage from "@/pages/about/page";
// import CasesPage from "@/pages/cases/page";
import ContactsPage from "@/pages/contacts/page";
import ContactusPage from "@/pages/contactus/page";
import LicensesPage from "@/pages/licenses/page";
import ReviewsPage from "@/pages/reviews/page";
import ServicesPage from "@/pages/services/page";
import {AppContextProvider} from "@/context/context";
import Header from "@/components/header/header";
import CasesPage from "@/pages/cases/page";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomePage/>,
//     },
//     {
//         path: "/about",
//         element: <AboutPage/>,
//     },
//     {
//         path: "/cases",
//         element: <CasesPage/>,
//     },
//     {
//         path: "/contacts",
//         element: <ContactsPage/>,
//     },
//     {
//         path: "/contactus",
//         element: <ContactusPage/>,
//     },
//     {
//         path: "/licenses",
//         element: <LicensesPage/>,
//     },
//     {
//         path: "/reviews",
//         element: <ReviewsPage/>,
//     },
//     {
//         path: "/services",
//         element: <ServicesPage/>,
//     },
// ]);

export default function Csr() {
    return (
        typeof document !== 'undefined' &&
        <AppContextProvider>
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route exact path="/about" element={<AboutPage/>}/>
                        <Route exact path="/cases" element={<CasesPage/>}/>
                        <Route exact path="/contacts" element={<ContactsPage/>}/>
                        <Route exact path="/contactus" element={<ContactusPage/>}/>
                        <Route exact path="/licenses" element={<LicensesPage/>}/>
                        <Route exact path="/reviews" element={<ReviewsPage/>}/>
                        <Route exact path="/services" element={<ServicesPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
            {/*<RouterProvider router={router} />*/}
        </AppContextProvider>
    );
}