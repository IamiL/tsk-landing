import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart6 from "../cart/6/cart6";
import "./mobileMap.css"
import PointCart2 from "../point/cart/cart2";

export default function MobileMap() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        swipeToSlide: true,
        prevArrow: <div style={{display: 'none'}}/>,
        nextArrow: <div style={{display: 'none'}}/>,
        beforeChange: (current, next) => {
            setActiveCardIndex(next);
        }
    };

    return (
        <>
            <div id='mobile-map'>
                <img id='mobile-map-img' src={'map.webp'} alt="Map" width={400} height={200}/>
                <PointCart2 classname={activeCardIndex === 0 ? 'zoom-effect' : ''} id={'mpoint1'}/>
                <PointCart2 classname={activeCardIndex === 1 ? 'zoom-effect' : ''} id={'mpoint2'}/>
                <PointCart2 classname={activeCardIndex === 2 ? 'zoom-effect' : ''} id={'mpoint3'}/>
                <PointCart2 classname={activeCardIndex === 3 ? 'zoom-effect' : ''} id={'mpoint4'}/>
                <PointCart2 classname={activeCardIndex === 4 ? 'zoom-effect' : ''} id={'mpoint5'}/>
                <PointCart2 classname={activeCardIndex === 5 ? 'zoom-effect' : ''} id={'mpoint6'}/>
                <PointCart2 classname={activeCardIndex === 6 ? 'zoom-effect' : ''} id={'mpoint7'}/>
                <PointCart2 classname={activeCardIndex === 7 ? 'zoom-effect' : ''} id={'mpoint8'}/>
            </div>

            <div id='mobile-map-carts'>
                <Slider {...settings}>
                    <Cart6 heading={'Название проекта1'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Название проекта2'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Название проекта3'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «Челябинский металлургический комбинат» МЕЧЕЛ'}
                           value={'Реализован комплекс проектных, строительно-монтажных и пусконаладочных работ по внедрению систем связи, охраны периметра, безопасности и физической защиты объектов предприятия в Челябинске.'}
                           link={'/cases/chelyabinsk-metallurgical-combine'}>
                        <img src={'/images/cases/chelyabinsk-metallurgical-combine.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Название проекта5'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Название проекта6'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Название проекта7'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Название проекта8'}
                           value={'Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект\n' +
                               '                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...'}
                           link={'/ural'}>
                        <img src={'/not-found1.png'} alt={'project-ural'}/>
                    </Cart6>
                </Slider>

                {/*<div>*/}
                {/*    Current card: {activeCardIndex + 1}*/}
                {/*</div>*/}
            </div>
        </>
    );
}