import React from "react"
import halfHungerImg from "../assets/half_hunger.png"
import emptyHungerImg from "../assets/empty_hunger.png"
import HungerImg from "../assets/hunger.png"

import "./Hunger.css"

export const Hungers = (props) => {
    return <div className="hungers">{Array(Math.floor(props.num / 2)).fill(null).map(
        (_, index) =>
            <div className="HungerImgCon">
            <img key={index} src={HungerImg} className="HungerImg"></img></div>

    )
    }
    {
        (Math.floor(props.num) % 2 >= 1) && <img src={HungerImg} className="HungerImg"></img>
    }
    {
        Array(Math.floor((20 - props.num) / 2)).fill(null).map(
            (_, index) =>
                <div className="HungerImgCon">
                <img src={emptyHungerImg} className="EmptyHungerImg"></img></div>)
       
    }
 </div>
}