import React, { useEffect, useState } from "react";
import './OverAllTier.css'
import SwordLogo from './assets/Sword.png'
import DiapotLogo from './assets/Diapot.png'
import NethLogo from './assets/nethpot.gif'
import UhcLogo from './assets/uhc.png'
import SmpLogo from './assets/Smp.png'
import AxeLogo from './assets/Axe.png'
import CrystalLogo from './assets/Crystal.png'

const OverAllTier = (props) => {
    const [bordercolor , setbordercolor] = useState("");
    const [regionColor , setRegionColor] = useState({background : "lightgray" , txt : "gray"});
    useEffect(()=>{
        if(props.id == 1){setbordercolor("solid rgb(212, 160, 23)")}
        else if (props.id == 2){setbordercolor("solid silver")}
        else if (props.id == 3){setbordercolor("solid rgb(184, 115, 51)")}
        if(props.Region){
            if(props.Region == "EU"){
                setRegionColor({background : "green" , txt : "lightgreen"})
            }
            else if(props.Region == "NA"){
                setRegionColor({background : "#442228" , txt : "#d95c6a"})
            }
            else if(props.Region == "AS"){
                setRegionColor({background : "#5e3e49" , txt : "#af7f91"})
            }
            else if (props.Region == "SA"){
                setRegionColor({background : "darkcyan" , txt : "#5dccdc"})
            }
            else if(props.Region == "ME"){
                setRegionColor({background : "#4d4525" , txt : "#e5d386"})
            }
            else if (props.Region == "AU"){
                setRegionColor({background : "#392e27" , txt : "#d5ad80"})
            }
            else if (props.Region == "AF"){
                setRegionColor({background : "#5e3e49" , txt : "#af7f91"})
            }
        }
    }, [props])
    return <div className="OverAllTier" onClick={() => {props.displayStats(props.UserName)}}
         style={{border : bordercolor}}>
            <div className="identityCon">
        <h1 className="OverAllPlace">{String(props.id) + "."}</h1>
        <img src = {"https://render.crafty.gg/3d/bust/" + props.UserName} className="OverAllImg"></img>
        <div style={{display : "flex" , flexDirection : "column", width : "fit-content"}}>
            <h1 className="OverAllName">{props.UserName}</h1>
            <h1 className="OverAllElo" style={{display : "flex", alignItems : "center"}}>{ props.Perk} <span style={{color : "lightgray", fontSize : "25px", marginLeft : "10px"}}>{" ( " + String(props.Elo)+" Points )"}</span></h1>
            <h1 className="OverAllShortRegion">{props.Region ? props.Region : "err"}</h1>

        </div>

        </div>
        <div className="OverAllSet">
        <div className="overAllRegionGrandCon">
        <div className="OverAllRegionCon" style={{backgroundColor : regionColor.background}}>
            <h1 className="OverAllRegionTxt" style={{color : regionColor.txt}}
            >{props.Region ? props.Region : "err" }</h1>
        </div>
        </div>
            <div style={{display : "flex"}}>
            <div className="OverAllGm"><img src = {SwordLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.Sword}</p></div>
            </div>
            <div className="OverAllGm"><img src = {DiapotLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.DiaPot}</p></div>
            </div>
            <div className="OverAllGm"><img src = {NethLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.NethPot}</p></div>
            </div>
            <div className="OverAllGm"><img src = {UhcLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.Uhc}</p></div>
            </div>
            </div>
            <div style={{display : "flex"}}>
            <div className="OverAllGm"><img src = {SmpLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.Smp}</p></div>
            </div>
            <div className="OverAllGm"><img src = {AxeLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.Axe}</p></div>
            </div>
            <div className="OverAllGm"><img src = {CrystalLogo} className="OverAllGmImg"></img>
                <div className="OverAllTierWordCon"><p className="OverAllTierWord">{props.Crystal}</p></div>
            </div>
            </div>

        </div>
    </div>
}
export default OverAllTier