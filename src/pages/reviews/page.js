import Cart3 from "../../components/cart/3/cart3";
import review from "./review.png"
import "./page.css"
import React from "react";

export default function ReviewsPage() {
    return (
        <section id='reviewsp-sec'>
            <h1 className='fs3 mfs3 m-b' id='reviewsp-sec-heading'>Отзывы</h1>
            <div id='reviewsp-sec-container'>
                <div className='divid' id='divid6'/>
                <p className='fs5 mfs6 i-r' id='reviewsp-sec-container-text'>
                    Доверие клиентов — лучшая оценка нашей работы. Узнайте, как наши комплексные
                    решения
                    помогли обеспечить
                    безопасность и надежность на объектах различных компаний и предприятий.
                </p>
            </div>
            <div id='reviewsp-reviews'>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
                <Cart3
                    heading={`Благодарственное письмо от ООО "Уральско-Сибирская электромонтажная компания"`}
                    type={2}>
                    <img src={review} alt={"review"} className='reviewsp-img'/>
                </Cart3>
            </div>
        </section>
    );
}
