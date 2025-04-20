import React, { useEffect, useState } from "react";
import './OverAllTier.css'
import SwordLogo from '../assets/Sword.png'
import DiapotLogo from '../assets/Diapot.png'
import NethLogo from '../assets/nethpot.gif'
import UhcLogo from '../assets/uhc.png'
import SmpLogo from '../assets/Smp.png'
import AxeLogo from '../assets/Axe.png'
import CrystalLogo from '../assets/Crystal.png'

const OverAllTier = (props) => {
    const [bordercolor , setbordercolor] = useState("");
    const [bkcolor , setbkcolor] = useState("");
    const [regionColor , setRegionColor] = useState({background : "lightgray" , txt : "gray"});
    useEffect(()=>{
        if(props.id == 1){setbordercolor("var(--first-overall-border)"); setbkcolor("var(--first-overall-bk-color)")}
        else if (props.id == 2){setbordercolor("var(--second-overall-border)"); setbkcolor("var(--second-overall-bk-color)")}
        else if (props.id == 3){setbordercolor("var(--third-overall-border)"); setbkcolor("var(--third-overall-bk-color)")}
        if(props.Region){
            if(props.Region == "EU"){
                setRegionColor({background : "var(--eu-bk-color)" , txt : "var(--eu-txt-color)"})
            }
            else if(props.Region == "NA"){
                setRegionColor({background : "var(--na-bk-color)" , txt : "var(--na-txt-color)"})
            }
            else if(props.Region == "AS"){
                setRegionColor({background : "var(--as-bk-color)" , txt : "var(--as-txt-color)"})
            }
            else if (props.Region == "SA"){
                setRegionColor({background : "var(--sa-bk-color)" , txt : "var(--sa-txt-color)"})
            }
            else if(props.Region == "ME"){
                setRegionColor({background : "var(--me-bk-color)" , txt : "var(--me-txt-color)"})
            }
            else if (props.Region == "AU"){
                setRegionColor({background : "var(--au-bk-color)" , txt : "var(--au-txt-color)"})
            }
            else if (props.Region == "AF"){
                setRegionColor({background : "var(--af-bk-color)" , txt : "var(--af-txt-color)"})
            }
        }
    }, [props])
    return <div className="OverAllTier" onClick={() => {props.displayStats(props.UserName)}}
         style={{border : bordercolor, backgroundColor : bkcolor}}>
            <div className="identityCon">
        <h1 className="OverAllPlace">{String(props.id) + "."}</h1>
        <img src = {"https://render.crafty.gg/3d/bust/" + props.UserName} className="OverAllImg"></img>
        <div style={{display : "flex" , flexDirection : "column", width : "fit-content"}}>
            <h1 className="OverAllName">{props.UserName}</h1>
            <h1 className="OverAllElo" style={{display : "flex", alignItems : "center"}}>{ props.Perk} <span className="pointspan" >{" ( " + String(props.Elo)+" ELO )"}</span></h1>
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