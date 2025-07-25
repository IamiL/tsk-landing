'use client';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomePage from "@/pages/homePage/page";
import AboutPage from "@/pages/aboutPage/page";
// import CasesPage from "@/pages/casesPage/page";
import ContactsPage from "@/pages/contactsPage/page";
import ContactusPage from "@/pages/contactusPage/page";
import LicensesPage from "@/pages/licensesPage/page";
import ReviewsPage from "@/pages/reviewsPage/page";
import ServicesPage from "@/pages/servicesPage/page";
import {AppContextProvider} from "@/context/context";
import Header from "@/components/header/header";
import CasesPage from "@/pages/casesPage/page";
import KitsozPage from "@/pages/services/kitsozPage/page";
import SurveillanceSystemPage from "@/pages/services/surveillance-system/page";
import SecurityAndFireAlarmSystemsPage from "@/pages/services/security-and-fire-alarm-systems/page";
import ExtinguishingSystemPage from "@/pages/services/extinguishing-system/page";
import AccessControlPage from "@/pages/services/access-control/page";
import DesignAndIntegrationOfArtificialIntelligencePage
    from "@/pages/services/design-and-integration-of-artificial-intelligence/page";
import StructuredCablingNetworksPage from "@/pages/services/structured-cabling-networks/page";
import PerimeterSecuritySystemsEquipmentPage from "@/pages/services/perimeter-security-systems-equipment/page";
import FullCycleOfProjectImplementationPage from "@/pages/services/full-cycle-of-project-implementation/page";
import CustomersStaffTrainingPage from "@/pages/services/customers-staff-training/page";
import WarrantyAndPostWarrantyServicePage from "@/pages/services/warranty-and-post-warranty-service/page";
import UralFortumCasePage from "@/pages/cases/ural-fortum/page";
import WesternSiberiaFortumCasePage from "@/pages/cases/western-siberia-fortum/page";
import ChelyabinskMetallurgicalCombineCasePage from "@/pages/cases/chelyabinsk-metallurgical-combine/page";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomePage/>,
//     },
//     {
//         path: "/aboutPage",
//         element: <AboutPage/>,
//     },
//     {
//         path: "/casesPage",
//         element: <CasesPage/>,
//     },
//     {
//         path: "/contactsPage",
//         element: <ContactsPage/>,
//     },
//     {
//         path: "/contactusPage",
//         element: <ContactusPage/>,
//     },
//     {
//         path: "/licensesPage",
//         element: <LicensesPage/>,
//     },
//     {
//         path: "/reviewsPage",
//         element: <ReviewsPage/>,
//     },
//     {
//         path: "/servicesPage",
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
                        <Route exact path="/services/kitsoz" element={<KitsozPage/>}/>
                        <Route exact path="/services/surveillance-system" element={<SurveillanceSystemPage/>}/>
                        <Route exact path="/services/security-and-fire-alarm-systems"
                               element={<SecurityAndFireAlarmSystemsPage/>}/>
                        <Route exact path="/services/extinguishing-system" element={<ExtinguishingSystemPage/>}/>
                        <Route exact path="/services/access-control" element={<AccessControlPage/>}/>
                        <Route exact path="/services/design-and-integration-of-artificial-intelligence"
                               element={<DesignAndIntegrationOfArtificialIntelligencePage/>}/>
                        <Route exact path="/services/structured-cabling-networks"
                               element={<StructuredCablingNetworksPage/>}/>
                        <Route exact path="/services/perimeter-security-systems-equipment"
                               element={<PerimeterSecuritySystemsEquipmentPage/>}/>
                        <Route exact path="/services/full-cycle-of-project-implementation"
                               element={<FullCycleOfProjectImplementationPage/>}/>
                        <Route exact path="/services/customers-staff-training" element={<CustomersStaffTrainingPage/>}/>
                        <Route exact path="/services/warranty-and-post-warranty-service"
                               element={<WarrantyAndPostWarrantyServicePage/>}/>
                        <Route exact path="/cases/ural-fortum" element={<UralFortumCasePage/>}/>
                        <Route exact path="/cases/western-siberia-fortum" element={<WesternSiberiaFortumCasePage/>}/>
                        <Route exact path="/cases/chelyabinsk-metallurgical-combine" element={<ChelyabinskMetallurgicalCombineCasePage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
            {/*<RouterProvider router={router} />*/}
        </AppContextProvider>
    );
}