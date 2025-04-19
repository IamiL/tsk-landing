import {useEffect, useRef, useState} from 'react';

const useVisibleHook = () => {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);
    const threshold = useRef(15);

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;
        if (lastScrollY.current === 0) {
            lastScrollY.current = currentScrollY;
            return;
        }

        if (currentScrollY > lastScrollY.current + threshold.current) {
            setShow(false);
        } else if (currentScrollY < lastScrollY.current - threshold.current) {
            setShow(true);
        }
        lastScrollY.current = currentScrollY;
    };

    useEffect(() => {
        let animationFrameId= null; // Указали тип

        const handleScroll = () => {
            animationFrameId = requestAnimationFrame(controlNavbar);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return show;
};

export default useVisibleHook;
