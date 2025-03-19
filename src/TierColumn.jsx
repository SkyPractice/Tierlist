import React, { useEffect, useState } from "react";
import './TierColumn.css'

function TierElement(props){
    const [tiercolor, settiercolor] = useState("")
    useState(()=>{
        settiercolor(props.high ? "#263244" : "#161e2a")

    }, [])
    return <div className="tierElement" style={{backgroundColor : tiercolor}} onClick={() => {props.displayStatsFunc(props.txt)}}>{props.txt}</div>
}

export default function TierColumn(props){
    const [actualtiers, setActualTiers] = useState([])
    const [tierBkColor , settierBkColor] = useState({bk : "#161e2a" , txt : "#b1c0cc"})
    useEffect(()=>{
        setActualTiers(props.tiers.filter(e => Number(e.Tier[2]) == props.Tier && e.Tier[0] != "R"));
        if(props.Tier == 1){
            settierBkColor({bk : "#a17811bb",txt : "#f0b857"})
        }
        else if(props.Tier == 2){
            settierBkColor({bk : "#343843",txt : "#a9b1b9"})
        }
        else if (props.Tier == 3){
            settierBkColor({bk : "#352620",txt : "#d59161"})

        }

    }, [props.tiers])
    return <div className="tierColumn">
        <div className="tierColumnTitle" style={{backgroundColor : tierBkColor.bk, color : tierBkColor.txt}}>{"Tier " + String(props.Tier)}</div>
        <div className="tierColumnCon"> 
        {
            actualtiers.map((t, i) => t.Tier[0] == "H" ? <TierElement high = {t.Tier[0] == "H" ? true : false} displayStatsFunc = {props.displayStats} key = {i} txt = {t.UserName}></TierElement> : <></>)

        }
        {
         actualtiers.map((t, i) => t.Tier[0] == "L" ? <TierElement high = {t.Tier[0] == "H" ? true : false} displayStatsFunc = {props.displayStats} key = {i} txt = {t.UserName}></TierElement> : <></>)

        }
        </div>
    </div>
}