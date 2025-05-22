import Point from "../point";
import "./cart.css"
import React from "react"
import {Link} from "react-router-dom";

export default function PointCart({id, isOpen, open, close, cartLeft}) {
    return <div className='point' id={id}>
        {!cartLeft && <Point className={`point-icon ${isOpen ? 'point-icon-active' : ''}`} onClick={() => {
            isOpen ? close() : open()
        }}/>}
        <div
            className={`point-info ${isOpen ? `${cartLeft ? 'point-info-open-right' : 'point-info-open-left'}` : `${cartLeft ? 'point-info-close-right' : 'point-info-close-left'}`}`}>
            <div className='point-info-top'>
                <h3 className='point-info-heading fs9 i-m'>Название проекта</h3>
                <button className='point-info-close-btn fs10 i-m' onClick={close}>
                    <svg className='point-info-close-btn-svg' id="a" data-name="Слой 1"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.67 516.67">
                        <path d="M491.67,25L25,491.67M25,25l466.67,466.67" fill="#fff" stroke="#fff"
                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="50"/>
                    </svg>
                </button>
            </div>
            <div className='point-info-img-container'>
                {/*<img src={'CaseUral.webp'} alt={'caseUral'} className='point-info-img'/>*/}
                <img src={'/not-found1.png'} alt={'caseUral'} className='point-info-img'/>
            </div>

            <div className='point-info-info fs10 i-r'>
                Проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект
                неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект неизвестен, проект...
                {/*Комплексные строительно-монтажные и пусконаладочные работы по установке системы безопасности для*/}
                {/*объектов компании, включающие прокладку кабеленесущих конструкций, монтаж кабелей различного...*/}
            </div>
            <div className='point-info-link fs10 i-b'>
                <Link to={'/'}>
                    <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                        <polygon
                            points="5.97 11.45 4.65 10.15 8.11 6.69 0 6.69 0 4.77 8.11 4.77 4.65 1.31 5.97 0 11.69 5.73 5.97 11.45"
                            fill="#fff"/>
                    </svg>
                    Подробнее</Link>
            </div>
        </div>
        {cartLeft && <Point className={`point-icon ${isOpen ? 'point-icon-active' : ''}`} onClick={() => {
            isOpen ? close() : open()
        }}/>}
    </div>
}