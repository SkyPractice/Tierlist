import React from "react"
import halfHungerImg from "../assets/half_hunger.png"
import emptyHungerImg from "../assets/empty_hunger.png"
import HungerImg from "../assets/hunger.png"

import "./Hunger.css"

export const Hungers = (props) => {
    return <div className="hungers">{Array(Math.floor(props.num / 2)).fill(null).map(
        (_, index) =>
            <div key={index} className="HungerImgCon">
            <img src={HungerImg} className="HungerImg"></img></div>

    )
    }
    {
        (Math.floor(props.num) % 2 >= 1) && <div className="HungerImgCon"><img src={HungerImg} className="HungerImg"></img></div>
    }
    {
        Array(Math.floor((20 - props.num) / 2)).fill(null).map(
            (_, index) =>
                <div  key={index} className="HungerImgCon">
                <img src={emptyHungerImg} className="EmptyHungerImg"></img></div>)
       
    }
 </div>
}