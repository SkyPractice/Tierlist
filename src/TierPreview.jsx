import React, { useEffect, useState } from "react";
import './TierPreview.css'
import { getPerk } from "./Best";
import SwordLogo from './assets/Sword.png'
import DiapotLogo from './assets/Diapot.png'
import NethLogo from './assets/nethpot.gif'
import UhcLogo from './assets/uhc.png'
import SmpLogo from './assets/Smp.png'
import AxeLogo from './assets/Axe.png'
import CrystalLogo from './assets/Crystal.png'
import Crown from './assets/overall.svg'

export default function TierPreview(props){
    const [myprops , setmyprops] = useState([])
    const [bordercolour , setbordercolour] = useState("") // bk color
    useEffect(()=>{
        console.log(props)
        setmyprops(props)
        if(props.Stats.index + 1 == 1){setbordercolour("rgb(212, 160, 23)")}
        else if (props.Stats.index + 1 == 2){setbordercolour("silver")}
        else if (props.Stats.index + 1 == 3){setbordercolour("rgb(184, 115, 51)")}
    }, [props])

  if (!myprops || !myprops.Stats) {
    return <div className="blocker">Loading...</div>;
  }
    return <div className="blocker">
        <div className="statsPreview">
            <div className="closeButton" onClick={()=>{props.stopstatsfunc()}}>x</div>
            <div style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                <img src = {"https://render.crafty.gg/3d/bust/" + myprops.Stats.tier.IGN} className="statsImg"></img>
                <div style={{marginLeft: "10px", marginTop : "30px"}}>
                    <h1 className="statsIgn">{"Name : " + myprops.Stats.tier.IGN}</h1>
                    <h1 className="statsPerk">{"Title : " + getPerk(myprops.Stats.tier)}</h1>
                    <h1 className="statsRegion">{"Region : " + String(myprops.Stats.tier.region ? myprops.Stats.tier.region : "err")}</h1>
                </div>

            </div>
            <div className="StatsPlacement">
                <div className="placementHighLight" style={{backgroundColor : bordercolour}}>
                    <h1 className="placementTxt">{String(myprops.Stats.index + 1) + "."}</h1>
                </div>
                <img src={Crown} style={{height : "35px", marginLeft : "10px"}}></img><h1 className="placementword" >{"OVERALL ( " + Object.values(myprops.Stats.tier.Stats).reduce((sum, current) => {
                     return sum + (current && current.elo ? current.elo : 0);
                     }, 0) + " POINTS )"}</h1>

            </div>
            <div className="previewSet">
                <div className="previewTxtSet">
                    <h2 className="previewTxt">Tier: </h2>
                    <h2 className="previewTxt">Wins: </h2>
                    <h2 className="previewTxt">Losses: </h2>
                    <h2 className="previewTxt">Elo: </h2>

                </div>
                <div className="previewImgSet">
                        <div className="tierpreviewSet"><img src={SwordLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Sword.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.elo}</h2>
                        </div>
                        <div className="tierpreviewSet"><img src={DiapotLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Potion.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.elo}</h2></div>
                            <div className="tierpreviewSet"><img src={NethLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.NetheritePot.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.elo}</h2></div>
                        <div className="tierpreviewSet"><img src={UhcLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.UHC.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.elo}</h2></div>
                        <div className="tierpreviewSet"><img src={SmpLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.SMP.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.elo}</h2></div>
                        <div className="tierpreviewSet"><img src={AxeLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Axe.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.elo}</h2></div>
                        <div className="tierpreviewSet"><img src={CrystalLogo} className="previewImg"></img>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Crystal.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.elo}</h2></div>
                   
                </div>
            </div>
        </div>
    </div>
}