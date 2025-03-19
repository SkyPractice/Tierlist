import React, { useState } from "react";
import './Best.css'
import OverAllTier from "./OverAllTier";

export const getPerk = (tier) => {
    const elo = Object.values(tier.Stats).reduce((sum, current) => {
        return sum + (current && current.elo ? current.elo : 0);
      }, 0)
    if(elo > 8400){ return "Combat Master"; }
    else if(elo > 7400){ return "Combat Ace"; }
    else if(elo > 6400){ return "Combat Specialist"; }
    else if(elo > 5400){ return "Combat Cadet"; }
    else { return "Combat Newbie"; }


}

const Best = (props) => {

    return <main>
        {props.tiers.length > 0 ? props.tiers.map((tier, index) => <OverAllTier displayStats = {props.displayStatsFunc} key = {index} id = {index + 1} UserName = {tier.IGN} 
            Sword = {tier.Stats.Sword.rank != "Unranked" ? tier.Stats.Sword.rank : "..."}
            DiaPot = {tier.Stats.Potion.rank != "Unranked" ? tier.Stats.Potion.rank : "..."}
            NethPot = {tier.Stats.NetheritePot.rank != "Unranked" ? tier.Stats.NetheritePot.rank : "..."}
            Smp = {tier.Stats.SMP.rank != "Unranked" ? tier.Stats.SMP.rank : "..."} 
            Crystal = {tier.Stats.Crystal.rank != "Unranked" ? tier.Stats.Crystal.rank : "..."}
            Uhc = {tier.Stats.UHC.rank != "Unranked" ? tier.Stats.UHC.rank : "..."}
            Axe = {tier.Stats.Axe.rank != "Unranked"? tier.Stats.Axe.rank : "..."}
            Elo = {Object.values(tier.Stats).reduce((sum, current) => {
                return sum + (current && current.elo ? current.elo : 0);
              }, 0)} 
            Perk = {getPerk(tier)} 
            Region = {tier.region}></OverAllTier>): <p className="notiers">No Tiers Available</p>}
    </main>
}
export default Best