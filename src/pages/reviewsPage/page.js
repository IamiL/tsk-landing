import Cart3 from "../../components/cart/3/cart3";
import ZoomableImage from "../../components/imageViewer/ZoomableImage";
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
                    <ZoomableImage 
                        src={'/images/reviews/Ural-Siberian-Electrotechnical-Company.webp'} 
                        fullSizeSrc={'/images/reviews/Ural-Siberian-Electrotechnical-Company.png'}
                        alt={"Благодарность от ООО «Урало-Сибирская электротехническая компания»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «УГМК-Телеком»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/UMMC-Telecom.png'} 
                        fullSizeSrc={'/images/reviews/UMMC-Telecom-fullsize.png'}
                        alt={"Благодарность от ООО «УГМК-Телеком»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Аларм»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/alarm.png'} 
                        fullSizeSrc={'/images/reviews/alarm-fullsize.png'}
                        alt={"Благодарность от ООО «Аларм»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОАО «ЧМК»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/mechel.png'} 
                        fullSizeSrc={'/images/reviews/mechel-fullsize.png'}
                        alt={"Благодарность от ОАО «ЧМК»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от Управления по обустройству государственной границы Российской Федерации"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/state-border.png'} 
                        fullSizeSrc={'/images/reviews/state-border-fullsize.png'}
                        alt={"Благодарность от Управления по обустройству государственной границы Российской Федерации"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОАО «Kemma»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/kemma.png'} 
                        fullSizeSrc={'/images/reviews/kemma-fullsize.png'}
                        alt={"Благодарность от ОАО «Kemma»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОАО «Челябинский цинковый завод»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/cink.png'} 
                        fullSizeSrc={'/images/reviews/cink-fullsize.png'}
                        alt={"Благодарность от ОАО «Челябинский цинковый завод»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО МПК «Ромкор»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/romkor.png'} 
                        fullSizeSrc={'/images/reviews/romkor-fullsize.png'}
                        alt={"Благодарность от ООО МПК «Ромкор»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Виола Арт»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/viola.png'} 
                        fullSizeSrc={'/images/reviews/viola-fullsize.png'}
                        alt={"Благодарность от ООО «Виола Арт»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от Государственного унитарного предприятия Челябинской области «Протокол»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/protokol.png'} 
                        fullSizeSrc={'/images/reviews/protokol-fullsize.png'}
                        alt={"Благодарность от Государственного унитарного предприятия Челябинской области «Протокол»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от Министерства экономического развития Челябинской области"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/econom.png'} 
                        fullSizeSrc={'/images/reviews/econom-fullsize.png'}
                        alt={"Благодарность от Министерства экономического развития Челябинской области"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Формула Безопасности – Урал»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/formula.png'} 
                        fullSizeSrc={'/images/reviews/formula-fullsize.png'}
                        alt={"Благодарность от ООО «Формула Безопасности – Урал»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Группа ТРИЗ»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/tris.png'} 
                        fullSizeSrc={'/images/reviews/tris-fullsize.png'}
                        alt={"Благодарность от ООО «Группа ТРИЗ»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Крепёжный Арсенал»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/krepezh.png'} 
                        fullSizeSrc={'/images/reviews/krepezh-fullsize.png'}
                        alt={"Благодарность от ООО «Крепёжный Арсенал»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ООО «Челтелекабель»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/cheltelecabel.png'} 
                        fullSizeSrc={'/images/reviews/cheltelecabel-fullsize.png'}
                        alt={"Благодарность от ООО «Челтелекабель»"}
                        className='reviewsp-img'
                    />
                </Cart3>
                <Cart3
                    heading={"Благодарность от ОГУК «Челябинское концертное объединение»"}
                    type={2}>
                    <ZoomableImage 
                        src={'/images/reviews/concert.png'} 
                        fullSizeSrc={'/images/reviews/concert-fullsize.png'}
                        alt={"Благодарность от ОГУК «Челябинское концертное объединение»"}
                        className='reviewsp-img'
                    />
                </Cart3>
            </div>
        </section>
    );
}