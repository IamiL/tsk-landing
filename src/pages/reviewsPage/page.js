import Cart3 from "../../components/cart/3/cart3";
import "./page.css"
import React from "react";

export default function ReviewsPage() {
    return (
        <section id='reviewsp-sec'>
            <h1 className='fs3 mfs3 m-b' id='reviewsp-sec-heading'>Отзывы</h1>
            <div id='reviewsp-sec-container'>
                <div className='divid' id='divid6'/>
                <p className='fs5 mfs6 i-r' id='reviewsp-sec-container-text'>
                    Положительные отзывы и рекомендации подтверждают нашу высокую репутацию среди клиентов как надежного
                    партнера по реализации технически сложных проектов.
                </p>
            </div>
            <div id='reviewsp-reviews'>
                <Cart3
                    heading={"Благодарность от ООО «Урало-Сибирская электротехническая компания»"}
                    type={2}>
                    <img src={'/images/reviews/Ural-Siberian-Electrotechnical-Company.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «УГМК-Телеком»"}
                    type={2}>
                    <img src={'/images/reviews/UMMC-Telecom.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Аларм»"}
                    type={2}>
                    <img src={'/images/reviews/alarm.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОАО «ЧМК»"}
                    type={2}>
                    <img src={'/images/reviews/mechel.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от Управления по обустройству государственной границы Российской Федерации"}
                    type={2}>
                    <img src={'/images/reviews/state-border.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОАО «Kemma»"}
                    type={2}>
                    <img src={'/images/reviews/kemma.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОАО «Челябинский цинковый завод»"}
                    type={2}>
                    <img src={'/images/reviews/cink.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО МПК «Ромкор»"}
                    type={2}>
                    <img src={'/images/reviews/romkor.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Виола Арт»"}
                    type={2}>
                    <img src={'/images/reviews/viola.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от Государственного унитарного предприятия Челябинской области «Протокол»"}
                    type={2}>
                    <img src={'/images/reviews/protokol.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от Министерства экономического развития Челябинской области"}
                    type={2}>
                    <img src={'/images/reviews/econom.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Формула Безопасности – Урал»"}
                    type={2}>
                    <img src={'/images/reviews/formula.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Группа ТРИЗ»"}
                    type={2}>
                    <img src={'/images/reviews/tris.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Крепёжный Арсенал»"}
                    type={2}>
                    <img src={'/images/reviews/krepezh.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Челтелекабель»"}
                    type={2}>
                    <img src={'/images/reviews/cheltelecabel.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОГУК «Челябинское концертное объединение»"}
                    type={2}>
                    <img src={'/images/reviews/concert.png'} alt={"review"}
                         className='reviewsp-img'/>
                </Cart3>
            </div>
        </section>
    );
}