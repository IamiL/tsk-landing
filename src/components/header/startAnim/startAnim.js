import React, {useEffect, useState} from "react";

export default function StartAnim({setAnim, pathname}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    function startAnim() {
        // document.body.style.overflow = "hidden";
        setTimeout(() => {
            setAnim(false);
            // document.body.style.overflow = "visible";
        }, 10000);
    }

    if (pathname === "/") {
        window.scrollTo({top: 0});
        startAnim()
    } else {
        setAnim(false);
    }

    return <></>
}