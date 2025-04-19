import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./servicesSlider.css";
import Cart4 from "../cart/4/cart4";

export default function ServicesSlider() {
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
        isMobile && <div id='services-mobile'>
            <Slider {...settings}>
                <Cart4 heading={"КИТСОЗ"}
                       value={"Комплексная система, объединяющая видеонаблюдение, сигнализацию и контроль доступа для всесторонней защиты объекта. КИТСОЗ обеспечивает безопасность персонала и имущества, позволяет оперативно реагировать на угрозы и предотвращать инциденты."}
                       link={"/"}
                       mainClassName={'servicesp-service border-right border-bottom'}/>
                <Cart4 heading={`Системы видеонаблюдения`}
                       value={`Проектирование и установка видеонаблюдения для контроля территории и производственных процессов. Системы позволяют в реальном времени отслеживать обстановку, предотвращать несанкционированный доступ и оперативно реагировать на инциденты.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-bottom'}/>
                <Cart4 heading={`Охранно-пожарная сигнализация`}
                       value={`Системы для своевременного обнаружения возгораний и несанкционированного проникновения. Оповещают службы безопасности и персонал, интегрируются с другими системами защиты для комплексной безопасности.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-right border-bottom'}/>
                <Cart4 heading={`СКУД`}
                       value={`СКУД контролирует доступ сотрудников в различные зоны, фиксирует рабочее время и обеспечивает высокий уровень безопасности. Включает устройства для идентификации, такие как карты и биометрия, с гибкими настройками доступа.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-bottom'}/>
                <Cart4 heading={`Охрана периметра `}
                       value={`Системы периметральной охраны, включающие датчики движения и инфракрасные барьеры, круглосуточно контролируют территорию и предотвращают несанкционированное проникновение.`}
                       link={"/"}
                       mainClassName={'servicesp-service border-right'}/>
                <Cart4 heading={`Структурированные  кабельные сети`}
                       value={`СКС — основа ИТ-инфраструктуры объекта, объединяющая все системы в единое информационное пространство. Обеспечивает стабильную связь и высокую скорость передачи данных, облегчая обслуживание технических систем.`}
                       link={"/"}
                       mainClassName={'servicesp-service'}/>
            </Slider>
        </div>
    );
}