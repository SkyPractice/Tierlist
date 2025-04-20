import React, { useEffect, useState } from "react";
import './TierPreview.css'
import Inventories from "../InventoryStage/Inventories";
import { getImgByName } from "../UseFulFunctions/Functions";
import SwordLogo from '../assets/Sword.png'
import DiapotLogo from '../assets/Diapot.png'
import NethLogo from '../assets/nethpot.gif'
import UhcLogo from '../assets/uhc.png'
import SmpLogo from '../assets/Smp.png'
import AxeLogo from '../assets/Axe.png'
import CrystalLogo from '../assets/Crystal.png'
import { MatchHistory } from "./MatchHistory";

const TierComponent = (props) => {
    return <div className="PreviewTierValCon">
        <div style={{ display: "flex" }}><h1 className="PreviewTierValTitle">{props.title}</h1><img className="PreviewLogo" src={props.logo}></img></div><h1 className="PreviewTierVal">
            {"Tier: " + props.rank}
        </h1><h1 className="PreviewTierVal">
            {"Wins: " + props.wins}
        </h1><h1 className="PreviewTierVal">
            {"losses: " + props.losses}
        </h1></div>
}

export default function TierPreview(props) {
    const [myprops, setmyprops] = useState([])
    const [bordercolour, setbordercolour] = useState("") // bk color
    const [bordercolor, setbordercolor] = useState("");
    const [bkcolor, setbkcolor] = useState("")
    const [matchResults, setMatchResults] = useState([])
    const [inventoryMode, setInventoryMode] = useState(false);
    const [inventoryGuy, setInventoryGuy] = useState({});
    useEffect(() => {
        setmyprops(props)
        if (props.Stats.index + 1 == 1) { setbordercolour("rgb(212, 160, 23)"); setbordercolor("solid rgb(212, 160, 23)"); setbkcolor("rgba(227, 164, 16, 0.7)"); }
        else if (props.Stats.index + 1 == 2) { setbordercolour("silver"); setbordercolor("solid silver"); setbkcolor("rgba(192 , 192 , 192 , 0.7)") }
        else if (props.Stats.index + 1 == 3) { setbordercolour("rgb(184, 115, 51)"); setbordercolor("solid rgb(184, 115, 51)"); setbkcolor("rgba(184, 115, 51, 0.7)") }
        if (props.Stats) {
            fetch("https://api.skypractice.xyz/api/matchresult/" + props.Stats.tier.IGN).then(res => res.json())
                .then(val => {
                    setMatchResults(val);
                })
        }
    }, [props])

    const ShowPlayerInventory = (indexx, ign) => {
        fetch("https://api.skypractice.xyz/api/matchresult/" + matchResults[indexx].match_id)
            .then(res => res.json()).then(val => {
                setInventoryGuy({ ...val, IGN: ign });
                setInventoryMode(true);
            })
    }
    if (!myprops || !myprops.Stats) {
        return <div className="blocker">Loading...</div>;
    }
    return <div className="blocker" onClick={() => { }}>
        <h1 className="PreviewClose" onClick={e => { props.stopstatsfunc() }}>&#x2716;</h1>
        {inventoryMode ? <Inventories Inven={inventoryGuy}></Inventories> : <><div className="PreviewProfileDetailsCon">
            <img src={"https://mc-heads.net/head/" + myprops.Stats.tier.IGN} className="PreviewProfileImg"></img>
            <h1 className="PreviewPlayerName">{myprops.Stats.tier.IGN + "'s Profile"}</h1>
        </div>
            <h1 className="PreviewTitle">Total</h1>
            <div className="PreviewStatsGridConOverAll">
                <div className="PreviewValCon"><h1 className="PreviewValTitle">Wins</h1><h1 className="PreviewVal">
                    {myprops.Stats.wins}
                </h1></div>
                <div className="PreviewValCon"><h1 className="PreviewValTitle">Losses</h1><h1 className="PreviewVal">
                    {myprops.Stats.losses}
                </h1></div>
                <div className="PreviewValCon"><h1 className="PreviewValTitle">Elo</h1><h1 className="PreviewVal">
                    {myprops.Stats.elo}
                </h1></div>
                <div className="PreviewValCon"><h1 className="PreviewValTitle">Region</h1><h1 className="PreviewVal">
                    {myprops.Stats.tier.region}
                </h1></div>
            </div>
            <h1 className="PreviewTitle">Tiers And Stats</h1>
            <div className="PreviewTierStatsGridConOverAll">
                <TierComponent title="Sword" rank={myprops.Stats.tier.Stats.Sword.rank}
                    wins={myprops.Stats.tier.Stats.Sword.wins}
                    losses={myprops.Stats.tier.Stats.Sword.losses} logo={SwordLogo}></TierComponent>
                <TierComponent title="DiaPot" rank={myprops.Stats.tier.Stats.Potion.rank}
                    wins={myprops.Stats.tier.Stats.Potion.wins}
                    losses={myprops.Stats.tier.Stats.Sword.losses} logo={DiapotLogo}></TierComponent>
                <TierComponent title="NethPot" rank={myprops.Stats.tier.Stats.NetheritePot.rank}
                    wins={myprops.Stats.tier.Stats.NetheritePot.wins}
                    losses={myprops.Stats.tier.Stats.NetheritePot.losses} logo={NethLogo}></TierComponent>
                <TierComponent title="UHC" rank={myprops.Stats.tier.Stats.UHC.rank}
                    wins={myprops.Stats.tier.Stats.UHC.wins}
                    losses={myprops.Stats.tier.Stats.UHC.losses} logo={UhcLogo}></TierComponent>


                <TierComponent title="SMP" rank={myprops.Stats.tier.Stats.SMP.rank}
                    wins={myprops.Stats.tier.Stats.SMP.wins}
                    losses={myprops.Stats.tier.Stats.SMP.losses} logo={SmpLogo}></TierComponent>
                <TierComponent title="Axe" rank={myprops.Stats.tier.Stats.Axe.rank}
                    wins={myprops.Stats.tier.Stats.Axe.wins}
                    losses={myprops.Stats.tier.Stats.Axe.losses} logo={AxeLogo}></TierComponent>
                <TierComponent title="Crystal" rank={myprops.Stats.tier.Stats.Crystal.rank}
                    wins={myprops.Stats.tier.Stats.Crystal.wins}
                    losses={myprops.Stats.tier.Stats.Crystal.losses} logo={CrystalLogo}></TierComponent>
            </div>
            <h1 className="PreviewTitle">Match History</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {!matchResults.error && matchResults.map((elm, index) => <MatchHistory key={index} ind={index} ign={myprops.Stats.tier.IGN} playerone={elm.player1}
                    playertwo={elm.player2} map={elm.map} gm={elm.gamemode ? elm.gamemode : "None"} duration={elm.duration} winner={elm.winner} player1_score={elm.player1_score}
                    player2_score={elm.player2_score} showPlayerInventory={ShowPlayerInventory}>

                </MatchHistory>)}
            </div></>}
    </div>
    {/*<div className="statsPreview" >
            <div className="closeButton" onClick={()=>{props.stopstatsfunc()}}>&#10006;</div>
            <div style={{display : "flex", justifyContent : "center", alignItems : "center"}}>
                <img src = {"https://render.crafty.gg/3d/bust/" + myprops.Stats.tier.IGN} className="statsImg"></img>
                <div style={{marginLeft: "10px", marginTop : "30px"}}>
                    <h1 className="statsIgn">{"Name : " + myprops.Stats.tier.IGN}</h1>
                    <h1 className="statsPerk">{"Title : " + getPerk(myprops.Stats.tier)}</h1>
                    <h1 className="statsRegion">{"Region : " + String(myprops.Stats.tier.region ? myprops.Stats.tier.region : "err")}</h1>
                </div>

            </div>
            <div className="StatsPlacement" style={{backgroundColor : bkcolor , border : bordercolor}}>
                <div className="placementHighLight" style={{backgroundColor : bordercolour}}>
                    <h1 className="placementTxt">{String(myprops.Stats.index + 1) + "."}</h1>
                </div>
                <img src={Crown} style={{height : "35px", marginLeft : "10px"}}></img><h1 className="placementword" >{"OVERALL ( " + Object.values(myprops.Stats.tier.Stats).reduce((sum, current) => {
                     return sum + (current && current.elo ? current.elo : 0);
                     }, 0) + " ELO )"}</h1>

            </div>
            <div className="previewSet" >
                <div className="previewTxtSet">
                    <div className="prevpadder">
                    <h2 className="previewTxt">Tier: </h2>
                    <h2 className="previewTxt">Wins: </h2>
                    <h2 className="previewTxt">Losses: </h2>
                    <h2 className="previewTxt">Elo: </h2>
                    </div>
                </div>
                <div className="previewImgSet">
                         { myprops.Stats.tier.Stats.Sword && <div className="tierpreviewSet"><img src={SwordLogo} className="previewImg"></img>
                            <div className="statsSet">
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Sword.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Sword.elo}</h2>
                            </div>
                        </div>}
                        { myprops.Stats.tier.Stats.Potion && <div className="tierpreviewSet"><img src={DiapotLogo} className="previewImg"></img>
                        <div className="statsSet">

                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Potion.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Potion.elo}</h2></div>
                            </div>
                        }
                            { myprops.Stats.tier.Stats.NetheritePot && <div className="tierpreviewSet"><img src={NethLogo} className="previewImg"></img>
                            <div className="statsSet">

                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.NetheritePot.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.NetheritePot.elo}</h2></div>
                            </div>
                            }
                         { myprops.Stats.tier.Stats.UHC && <div className="tierpreviewSet"><img src={UhcLogo} className="previewImg"></img>
                            <div className="statsSet">

                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.UHC.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.UHC.elo}</h2></div>
                            </div>}
                        { myprops.Stats.tier.Stats.SMP && <div className="tierpreviewSet"><img src={SmpLogo} className="previewImg"></img>
                        <div className="statsSet">

                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.SMP.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.SMP.elo}</h2></div>
                            </div>}
                        { myprops.Stats.tier.Stats.Axe && <div className="tierpreviewSet"><img src={AxeLogo} className="previewImg"></img>
                        <div className="statsSet">

                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Axe.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Axe.elo}</h2></div>
                            </div>}
                        { myprops.Stats.tier.Stats.Crystal && <div className="tierpreviewSet"><img src={CrystalLogo} className="previewImg"></img>
                        <div className="statsSet">

                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.rank == "Unranked" ? "..." : myprops.Stats.tier.Stats.Crystal.rank }</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.wins}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.losses}</h2>
                            <h2 className="previewVal">{myprops.Stats.tier.Stats.Crystal.elo}</h2>
                            </div>
                            </div>}
                   
                </div>
            </div>
            <div style={{width : "100%", display : "flex" , flexDirection : "column", alignItems : "center"}}>
                <h1 className="matchResultsTxt">MatchResults : </h1>
                {
                    matchResults.length > 0 ? matchResults.map(result => <MatchResult res = {result} ign = {myprops.Stats.tier.IGN}></MatchResult>) : <h1 className="NoMatchesFound">No Matches Found</h1>
                }
            </div>
        </div>
    </>*/}
}