import React from "react"
import halfHeartImg from "../assets/half_heart.png"
import emptyHeartImg from "../assets/empty_heart.png"
import heartImg from "../assets/heart.png"

import "./Heart.css"

export const Hearts = (props) => {
    return <div className="hearts">{Array(Math.floor(props.num / 2)).fill(null).map(
        (_, index) =>
            <img key={index} src={heartImg} className="HeartImg"></img>

    )
    }
    {
        (Math.floor(props.num) % 2 >= 1) && <img src={halfHeartImg} className="HeartImg"></img>
    }
    {
        Array((Math.floor(props.num) % 2 >= 1) ? Math.floor((20 - props.num) / 2) : Math.ceil((20 - props.num) / 2)).fill(null).map(
            (_, index) =>
                <img key={index} src={emptyHeartImg} className="HeartImg"></img>)
       
    }
 </div>
}