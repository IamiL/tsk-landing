import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart6 from "../cart/6/cart6";
import "./mobileMap.css"
import PointCart2 from "../point/cart/cart2";

export default function MobileMap() {
    const [activeCardIndex, setActiveCardIndex] = useState(-1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        swipeToSlide: true,
        prevArrow: <div style={{display: 'none'}}/>,
        nextArrow: <div style={{display: 'none'}}/>,
    };

    return (
        <>
            <div id='mobile-map'>
                <img id='mobile-map-img' src={'map.webp'} alt="Map" width={400} height={200}/>
                <PointCart2 onClick={() => setActiveCardIndex(0)} classname={activeCardIndex === 0 ? 'zoom-effect' : ''}
                            id={'mpoint1'}/>
                <PointCart2 onClick={() => setActiveCardIndex(2)} classname={activeCardIndex === 1 ? 'zoom-effect' : ''}
                            id={'mpoint2'}/>
                <PointCart2 onClick={() => setActiveCardIndex(3)} classname={activeCardIndex === 2 ? 'zoom-effect' : ''}
                            id={'mpoint3'}/>
                <PointCart2 onClick={() => setActiveCardIndex(4)} classname={activeCardIndex === 3 ? 'zoom-effect' : ''}
                            id={'mpoint4'}/>
                <PointCart2 onClick={() => setActiveCardIndex(5)} classname={activeCardIndex === 4 ? 'zoom-effect' : ''}
                            id={'mpoint5'}/>
                <PointCart2 onClick={() => setActiveCardIndex(6)} classname={activeCardIndex === 5 ? 'zoom-effect' : ''}
                            id={'mpoint6'}/>
                <PointCart2 onClick={() => setActiveCardIndex(7)} classname={activeCardIndex === 6 ? 'zoom-effect' : ''}
                            id={'mpoint7'}/>
                <PointCart2 onClick={() => setActiveCardIndex(8)} classname={activeCardIndex === 7 ? 'zoom-effect' : ''}
                            id={'mpoint8'}/>
                <PointCart2 onClick={() => setActiveCardIndex(8)} classname={activeCardIndex === 7 ? 'zoom-effect' : ''}
                            id={'mpoint9'}/>
                <PointCart2 onClick={() => setActiveCardIndex(8)} classname={activeCardIndex === 7 ? 'zoom-effect' : ''}
                            id={'mpoint10'}/>
                <PointCart2 onClick={() => setActiveCardIndex(8)} classname={activeCardIndex === 7 ? 'zoom-effect' : ''}
                            id={'mpoint11'}/>
                <PointCart2 onClick={() => setActiveCardIndex(8)} classname={activeCardIndex === 7 ? 'zoom-effect' : ''}
                            id={'mpoint12'}/>
            </div>

            <div id='mobile-map-carts'>
                <Slider {...settings}>
                    <Cart6 heading={'Управление федеральной налоговой службы по Челябинской области'}
                           value={'Строительно-монтажные и пусконаладочные работы Инженерно-Технических Средств безопасности объекта.'}
                           v2={'/cases/ural-fortum'}
                           geo={'(г. Челябинск)'}>
                        <img src={'/images/cases/tax-service.jpeg'} alt={'project-tax-service'}/>
                    </Cart6>
                    <Cart6 heading={'Энергосистема «Урал» ОАО «Фортум»'}
                           value={'Работы по оснащению структурных подразделений филиала Энергосистема «Урал» ОАО «Фортум» комплексной системы безопасности. Челябинская ТЭЦ-1, Челябинская ТЭЦ-2, Челябинская ТЭЦ-3, Аргаяшская ТЭЦ.'}
                           v2={'/cases/western-siberia-fortum'}
                           geo={''}>
                        <img src={'/images/cases/2.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Энергосистема «Западная Сибирь» ОАО «Фортум»'}
                           value={'Работы по оснащению структурных подразделений филиала Энергосистема «Западная Сибирь» ОАО «Фортум» комплексной системой безопасности. Тюменская ТЭЦ-1, Тюменская ТЭЦ-2, Тобольская ТЭЦ.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={''}>
                        <img src={'/images/cases/3.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «Челябинский металлургический комбинат» МЕЧЕЛ'}
                           value={'Комплекс работ по выполнению проектных, строительно-монтажных и пусконаладочных работ систем связи, систем охраны периметра, систем безопасности и физической укрепленности объектов.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/4.jpeg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО Каслинский завод архитектурно-художественного литья'}
                           value={'Осуществление проектных, строительно-монтажных и пусконаладочных работ Интегрированной системы видеонаблюдения и систем охраны периметра.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Касли)'}>
                        <img src={'/images/cases/5.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «Челябинский цинковый завод»'}
                           value={'Реконструкция систем безопасности промышленного предприятия, реализация программы модернизации систем Интеграции ОПС в 2011–2013 гг.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/6.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «Кыштымское машиностроительное объединение»'}
                           value={'Строительно-монтажные и пусконаладочные работы по организации волоконно-оптической линии связи для нужд интегрированной системы безопасности предприятия.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Кыштым)'}
                           geo={''}>
                        <img src={'/images/cases/7.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ЗАО «Коелгамрамор»'}
                           value={'Строительно-монтажные и пусконаладочные работы структурированных кабельных систем предприятия.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., Еткульский р-н, с. Коелга)'}>
                        <img src={'/images/cases/8.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «НОВАТЭК-Челябинск»'}
                           value={'Строительно-монтажные и пусконаладочные работы Инженерно-Технических Средств безопасности объекта.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Магнитогорск)'}>
                        <img src={'/images/cases/9.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'АО «Южуралзолото Группа Компаний» (АО "ЮГК")'}
                           value={'Комплекс работ по выполнению проектных, строительно-монтажных и пусконаладочных работ систем связи, систем охраны периметра, систем безопасности, систем охранной, пожарной сигнализации и оповещение о пожаре.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Пласт)'}>
                        <img src={'/images/cases/10.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО УГМК-ТЕЛЕКОМ'}
                           value={'Построение интегрированных систем безопасности на промышленных предприятиях УГМК-Холдинга. Выполнение проектных, строительно-монтажных и пусконаладочных работ, техническое обслуживание и сопровождение.'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Свердловская область)'}>
                        <img src={'/images/cases/11.png'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «Бизнес-Сити»'}
                           value={'Комплекс работ по выполнению проектных, строительно-монтажных и пусконаладочных работ структурированных кабельных систем и систем безопасности (СКУД, ОПС, СОУЭ, Видеонаблюдение).'}
                           v2={'/cases/chelyabinsk-metallurgical-combine'}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/12.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «Мечел – Энерго»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/1.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «Мечел – Кокс»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/2.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «Мечел – Материалы»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/3.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО СпецРемЗавод'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/4.jpeg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО УрМО'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/4.jpeg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'АО «ЧЭМК»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/5.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «КЕММА»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/6.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «Кемма-ЦветМет»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/6.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «Челябинский механический завод»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/8.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО Челябинский кузнечно-прессовый завод'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/7.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «ТЗК Волга»'}
                           value={'Проектирование ИТСО.'}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/9.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ОАО «Челябинский комбинат хлебопродуктов №1»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/10.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ПЖРЭО Курчатовского района'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/11.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО «КНАУФ ГИПС ЧЕЛЯБИНСК»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/12.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ЗАО «Втор-Ком»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/13.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ВДПО'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/14.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'ООО Агрохолдинг «Уралбройлер»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/15.jpg'} alt={'project-ural'}/>
                    </Cart6>
                    <Cart6 heading={'Национальная водная компания ООО ПК «НИАГАРА»'}
                           value={''}
                           v2={''}
                           geo={'(Челябинская обл., г. Челябинск)'}>
                        <img src={'/images/cases/2-part/16.jpg'} alt={'project-ural'}/>
                    </Cart6>
                </Slider>

                {/*<div>*/}
                {/*    Current card: {activeCardIndex + 1}*/}
                {/*</div>*/}
            </div>
        </>
    );
}