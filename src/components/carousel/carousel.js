import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import "./carousel.css"


export default function Carousel({children}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const settings = isMobile ? {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '1px',
        swipeToSlide: true,
        prevArrow: <></>,
        nextArrow: <></>
    } : {
        dots: true, // Показывать точки навигации
        infinite: true, // Зациклить слайды
        speed: 300, // Скорость анимации
        slidesToShow: 3.4, // Количество показываемых элементов
        slidesToScroll: 1, // Количество прокручиваемых элементов за раз
        autoplay: true, // Автоматическая прокрутка
        autoplaySpeed: 4000, // Скорость автоматической прокрутки в миллисекундах
        arrows: false,
        prevArrow: <></>,
        nextArrow: <></>
    };

    return (
        <Slider {...settings}>
            {
                children
            }
        </Slider>
    );
}