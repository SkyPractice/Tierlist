import React, { useEffect } from "react";
import "./MatchHistory.css"
import { getImgByName } from "../UseFulFunctions/Functions";

export const MatchHistory = (props) => {
    return <div className="MatchHistory" onClick={e => { props.showPlayerInventory(props.ind, props.ign) }}>
        <div className={"MatchResultCon"}>
            <img src={"https://mc-heads.net/head/" + props.ign} className="MatchResultImg"></img>
            <h1 className="MatchResultPlayerName">{props.ign}</h1>
            <h1 className="MatchResultScore">{props.ign == props.playerone ? props.player1_score : props.player2_score}</h1>
            <img src={getImgByName(props.gm)} className="MatchResultGmImg"></img>
            <h1 className="MatchResultScore">{props.ign == props.playerone ? props.player2_score : props.player1_score}</h1>

            <img src={"https://mc-heads.net/head/" + (props.ign == props.playerone ? props.playertwo : props.playerone)} className="MatchResultImg"></img>
            <h1 className="MatchResultPlayerName">{(props.ign == props.playerone ? props.playertwo : props.playerone)}</h1>
        </div>
        <div style={{ display: "flex" }}>
            <div className="MatchResultmhm" style={{ backgroundColor: props.winner == props.ign ? "var(--winner-flag-bk-color)" : "var(--loser-flag-bk-color)" }}>{(props.winner == props.ign ? "Win" : "Loss")}</div>
            <div className="MatchResultmhm">{("Dur: " + props.duration + "s")}</div>
            <div className="MatchResultmhm">{("Map: " + props.map)}</div>
        </div>
    </div>
}