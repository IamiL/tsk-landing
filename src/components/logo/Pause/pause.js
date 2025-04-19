import {useEffect, useState} from "react";


export default function Pause() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    var video = document.getElementById("mainp-sec1-img");
    if (!video) {
        console.log("ВИДЕО НЕ НАЙДЕНО");
        return <></>
    }
    console.log("ВИДЕО НАЙДЕНО");
    video.addEventListener("pause", (event) => {
        console.log(
            "VIDEO STOPED",
        );
    });
    video.addEventListener("play", (event) => {
        console.log(
            "VIDEO PLAY",
        );
    });
    return <></>
}