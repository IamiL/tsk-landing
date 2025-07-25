import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Cart2 from "../cart/2/cart2";
import ZoomableImage from "../imageViewer/ZoomableImage";
import "./licensesMobile.css";

export default function LicensesSlider() {
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
        prevArrow: <div style={{display: 'none'}} />,
        nextArrow: <div style={{display: 'none'}} />
    };

    return (
        isMobile && <div id='mainp-sec5-licenses-mobile'>
            <Slider {...settings}>
                <Cart2 heading={"Лицензия МЧС"}>
                    <ZoomableImage
                        src={'/images/licenses/mchs1.webp'}
                        fullSizeSrc={'/images/licenses/mchs1-fullsize.webp'}
                        alt={"Лицензия на монтаж и обслуживание систем пожарной безопасности"}
                        className='mainp-sec5-licenses-img'
                    />
                </Cart2>
                <Cart2 heading={"Членство в Союзе Строительных Компаний Урала и Сибири"}>
                    <ZoomableImage
                        src={'/images/licenses/sro1.webp'}
                        fullSizeSrc={'/images/licenses/sro1-fullsize.webp'}
                        alt={"СРО - страница 1"}
                        className='mainp-sec5-licenses-img'
                    />
                </Cart2>
                <Cart2 heading={"Членство в «Челябинском региональном объединении проектировщиков»"}>
                    <ZoomableImage
                        src={'/images/licenses/chelrop1.webp'}
                        fullSizeSrc={'/images/licenses/chelrop1-fullsize.webp'}
                        alt={"ЧелРОП - страница 1"}
                        className='mainp-sec5-licenses-img'
                    />
                </Cart2>
            </Slider>
        </div>
    );
}