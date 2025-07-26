import React, {useEffect, useRef, useState} from "react";

export default function StartAnim({setAnim, pathname}) {
    const [isClient, setIsClient] = useState(false);
    const hasAnimationPlayed = useRef(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        if (pathname === "/" && !hasAnimationPlayed.current) {
            // Первый заход на главную страницу
            hasAnimationPlayed.current = true;
            window.scrollTo({top: 0});
            setAnim(true);

            // Блокируем скролл
            document.body.style.overflow = "hidden";

            // Через 10 секунд завершаем анимацию
            const timer = setTimeout(() => {
                setAnim(false);
                document.body.style.overflow = "visible";
            }, 10000);

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = "visible";
            };
        } else {
            // Не главная страница или анимация уже проигрывалась
            document.body.style.overflow = "visible";
            setAnim(false);
        }
    }, [isClient, pathname, setAnim]);

    return <></>
}