import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Cart2 from "../cart/2/cart2";
import "./licensesMobile2.css";

export default function LicensesSlider2() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const settings = {
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
    };

    return (
        isMobile && <div id='licensesp-container2-licenses-mobile'>
            <Slider {...settings}>
                <Cart2 heading={"Лицензия МЧС"}>
                    <img src={'/not-found2.png'} alt={"license"} className='mainp-sec5-licenses-img'/>
                </Cart2>
                <Cart2 heading={"СРО"}>
                    <img src={'images/licensesPage/toleranceSRO1.png'} alt={"license"}
                         className='mainp-sec5-licenses-img'/>
                </Cart2>
                <Cart2 heading={"ЧелРОП"}>
                    <img src={'images/licensesPage/tolerancechelrop1.webp'} alt={"license"}
                         className='mainp-sec5-licenses-img'/>
                </Cart2>
            </Slider>
        </div>
    );
}