import './desktopMap.css'
import PointCart from "../point/cart/cart";
import {useState} from "react";

export default function DesktopMap() {
    const [open, setOpen] = useState(0);

    return <>
        <img id='map' src={'map.webp'} alt="Map" width={400} height={200}/>
        <PointCart isOpen={(open === 1)} open={() => setOpen(1)} close={() => setOpen(0)} id={'point1'}/>
        <PointCart isOpen={(open === 2)} open={() => setOpen(2)} close={() => setOpen(0)} id={'point2'}/>
        <PointCart isOpen={(open === 3)} open={() => setOpen(3)} close={() => setOpen(0)} id={'point3'}/>
        <PointCart isOpen={(open === 4)} open={() => setOpen(4)} close={() => setOpen(0)} id={'point4'}/>
        <PointCart isOpen={(open === 5)} open={() => setOpen(5)} close={() => setOpen(0)} id={'point5'}/>
        <PointCart isOpen={(open === 6)} open={() => setOpen(6)} close={() => setOpen(0)} id={'point6'}/>
        <PointCart isOpen={(open === 7)} open={() => setOpen(7)} close={() => setOpen(0)} id={'point7'}/>
        <PointCart isOpen={(open === 8)} open={() => setOpen(8)} close={() => setOpen(0)} id={'point8'}
                   cartLeft/>
        <PointCart isOpen={(open === 9)} open={() => setOpen(9)} close={() => setOpen(0)} id={'point9'}
                   cartLeft/>
    </>
}