'use client';
import {createBrowserRouter, RouterProvider, useLocation, Outlet} from "react-router-dom";
import {useEffect, useRef} from "react";

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
import PrivacyPage from "@/pages/privacyPage/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "about",
                element: <AboutPage/>,
            },
            {
                path: "cases",
                element: <CasesPage/>,
            },
            {
                path: "contacts",
                element: <ContactsPage/>,
            },
            {
                path: "contactus",
                element: <ContactusPage/>,
            },
            {
                path: "licenses",
                element: <LicensesPage/>,
            },
            {
                path: "reviews",
                element: <ReviewsPage/>,
            },
            {
                path: "services",
                element: <ServicesPage/>,
            },
            {
                path: "services/kitsoz",
                element: <KitsozPage/>,
            },
            {
                path: "services/surveillance-system",
                element: <SurveillanceSystemPage/>,
            },
            {
                path: "services/security-and-fire-alarm-systems",
                element: <SecurityAndFireAlarmSystemsPage/>,
            },
            {
                path: "services/extinguishing-system",
                element: <ExtinguishingSystemPage/>,
            },
            {
                path: "services/access-control",
                element: <AccessControlPage/>,
            },
            {
                path: "services/design-and-integration-of-artificial-intelligence",
                element: <DesignAndIntegrationOfArtificialIntelligencePage/>,
            },
            {
                path: "services/structured-cabling-networks",
                element: <StructuredCablingNetworksPage/>,
            },
            {
                path: "services/perimeter-security-systems-equipment",
                element: <PerimeterSecuritySystemsEquipmentPage/>,
            },
            {
                path: "services/full-cycle-of-project-implementation",
                element: <FullCycleOfProjectImplementationPage/>,
            },
            {
                path: "services/customers-staff-training",
                element: <CustomersStaffTrainingPage/>,
            },
            {
                path: "services/warranty-and-post-warranty-service",
                element: <WarrantyAndPostWarrantyServicePage/>,
            },
            {
                path: "cases/ural-fortum",
                element: <UralFortumCasePage/>,
            },
            {
                path: "cases/western-siberia-fortum",
                element: <WesternSiberiaFortumCasePage/>,
            },
            {
                path: "cases/chelyabinsk-metallurgical-combine",
                element: <ChelyabinskMetallurgicalCombineCasePage/>,
            },
            {
                path: "privacy",
                element: <PrivacyPage/>,
            },
        ]
    },
]);


function ScrollToTop() {
    const location = useLocation();
    const isBackNavigation = useRef(false);

    useEffect(() => {
        const handlePopState = () => {
            isBackNavigation.current = true;
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useEffect(() => {
        if (!isBackNavigation.current) {
            window.scrollTo(0, 0);
        }
        isBackNavigation.current = false;
    }, [location.pathname]);

    return null;
}

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}

export default function Csr() {
    return (
        typeof document !== 'undefined' &&
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    );
}