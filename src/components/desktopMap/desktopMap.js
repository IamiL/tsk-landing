import './desktopMap.css'
import PointCart from "../point/cart/cart";
import {useState} from "react";

export default function DesktopMap() {
    const [open, setOpen] = useState(0);

    return <>
        <img id='map' src={'map.webp'} alt="Map" width={400} height={200}/>
        <PointCart isOpen={(open === 1)} open={() => setOpen(1)} close={() => setOpen(0)} id={'point1'}
                   heading={'Пермский край'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 2)} open={() => setOpen(2)} close={() => setOpen(0)} id={'point2'}
                   heading={'Республика Крым'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 3)} open={() => setOpen(3)} close={() => setOpen(0)} id={'point3'}
                   heading={'Центральный федеральный округ'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 4)} open={() => setOpen(4)} close={() => setOpen(0)} id={'point4'}
                   heading={'Челябинская область'}
                   description={'Реализован комплекс проектных, строительно-монтажных и пусконаладочных работ по внедрению систем связи, охраны периметра, безопасности и физической защиты объектов предприятия в Челябинске.'}
                   link={'/cases/chelyabinsk-metallurgical-combine'}
                   imageLink={'/images/cases/chelyabinsk-metallurgical-combine.jpg'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 5)} open={() => setOpen(5)} close={() => setOpen(0)} id={'point5'}
                   heading={'Республика Саха (Якутия)'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 6)} open={() => setOpen(6)} close={() => setOpen(0)} id={'point6'}
                   heading={'Республика Алтай'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 7)} open={() => setOpen(7)} close={() => setOpen(0)} id={'point7'}
                   heading={'Ямало-Ненецкий автономный округ'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 8)} open={() => setOpen(8)} close={() => setOpen(0)} id={'point8'}
                   cartLeft
                   heading={'Камчатский край'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 9)} open={() => setOpen(9)} close={() => setOpen(0)} id={'point9'}
                   cartLeft
                   heading={'Приморский край, Владивосток'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
        <PointCart isOpen={(open === 10)} open={() => setOpen(10)} close={() => setOpen(0)} id={'point10'}
                   heading={'Тюменская область'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>

        <PointCart isOpen={(open === 11)} open={() => setOpen(11)} close={() => setOpen(0)} id={'point11'}
                   heading={'Ханты-Мансийский автономный округ — Югра'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>

        <PointCart isOpen={(open === 12)} open={() => setOpen(12)} close={() => setOpen(0)} id={'point12'}
                   heading={'Омская, Новосибирская области'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>

        <PointCart isOpen={(open === 13)} open={() => setOpen(13)} close={() => setOpen(0)} id={'point13'}
                   heading={'Волгоградская область'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>

        <PointCart isOpen={(open === 14)} open={() => setOpen(14)} close={() => setOpen(0)} id={'point14'}
                   heading={'Свердловская область'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>

        <PointCart isOpen={(open === 15)} open={() => setOpen(15)} close={() => setOpen(0)} id={'point15'}
                   heading={'Оренбургская область'}
                   description={'Опсание <UNK> <UNK> <UNK>'}
                   link={'/'}
                   imageLink={'/not-found1.png'}
                   imageAlt={'alt'}/>
    </>
}