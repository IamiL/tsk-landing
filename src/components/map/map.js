import "./map.css"
import MobileMap from "../mobileMap/mobileMap";
import {useEffect, useState} from "react";
import DesktopMap from "../desktopMap/desktopMap";

export default function Map() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    return isMobile ? <div id='map-container'>
        <MobileMap/>
    </div> : <div id='map-container'>
        <DesktopMap/>
    </div>
}