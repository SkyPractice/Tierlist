import React from "react";
import './TableTiers.css'
import TierColumn from "./TierColumn";

const TierTable = (props) => {
    let real_props = [];
    if(props.mode == "Sword"){
        let myprops = props.tiers.filter((obj) => obj.Stats.Sword.rank != "Unranked");
        real_props = myprops.map((obj, index) => {return {UserName : obj.IGN, Tier :obj.Stats.Sword.rank, id : index}});
    }
     else if(props.mode == "Diapot"){
        let myprops = props.tiers.filter(obj => obj.Stats.Potion.rank != "Unranked");
        real_props = myprops.map(obj => {return {UserName : obj.IGN, Tier : obj.Stats.Potion.rank , id : obj.id}});
    }
    else if(props.mode == "Nethpot"){
        let myprops = props.tiers.filter(obj => obj.Stats.NetheritePot.rank != "Unranked");
        real_props = myprops.map(obj => {return {UserName : obj.IGN, Tier : obj.Stats.NetheritePot.rank, id : obj.id}});
    }
    else if(props.mode == "Smp"){
        let myprops = props.tiers.filter(obj => obj.Stats.SMP.rank != "Unranked");
        real_props = myprops.map(obj => {return {UserName : obj.IGN, Tier : obj.Stats.SMP.rank, id : obj.id}});
    }
    else if(props.mode == "Uhc"){
        let myprops = props.tiers.filter(obj => obj.Stats.UHC.rank != "Unranked");
        real_props = myprops.map(obj => {return {UserName : obj.IGN, Tier : obj.Stats.UHC.rank, id : obj.id}});
    }
    else if(props.mode == "Crystal"){
        let myprops = props.tiers.filter(obj => obj.Stats.Crystal.rank != "Unranked");
        real_props = myprops.map(obj => {return {UserName : obj.IGN, Tier : obj.Stats.Crystal.rank, id : obj.id}});
    }
    else if(props.mode == "Axe"){
        let myprops = props.tiers.filter(obj => obj.Stats.Axe.rank != "Unranked");
        real_props = myprops.map(obj => {return {UserName : obj.IGN, Tier : obj.Stats.Axe.rank, id : obj.id}});
    }
    return <div className="TierColumnContainer">
        <TierColumn displayStats = {props.displayStatsFunc} Tier={1} tiers = {real_props} mode = {props.mode}></TierColumn>
        <TierColumn displayStats = {props.displayStatsFunc} Tier={2} tiers = {real_props} mode = {props.mode}></TierColumn>
        <TierColumn displayStats = {props.displayStatsFunc} Tier={3} tiers = {real_props} mode = {props.mode}></TierColumn>
        <TierColumn displayStats = {props.displayStatsFunc} Tier={4} tiers = {real_props} mode = {props.mode}></TierColumn>
        <TierColumn displayStats = {props.displayStatsFunc} Tier={5} tiers = {real_props} mode = {props.mode}></TierColumn>

    </div>
}
export default TierTable