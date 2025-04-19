import Point from "../point";
import "./cart.css"
import React from "react"

export default function PointCart2({id, classname}) {
    return <div className='point' id={id}>
        <Point className={'point-icon ' + classname} id={id}/>
    </div>
}