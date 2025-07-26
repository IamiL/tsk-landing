import React, {useEffect, useState} from "react";

export default function StartAnim({anim, setAnim, pathname}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        if (pathname === "/" && anim) {
            // Первый заход на главную страницу
            window.scrollTo({top: 0});

            // Блокируем скролл
            document.body.style.overflow = "hidden";

            // Через 10 секунд завершаем анимацию
            const timer = setTimeout(() => {
                setAnim(false);
                document.body.style.overflow = "visible";
            }, 7500);

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