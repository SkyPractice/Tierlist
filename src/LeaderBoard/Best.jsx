import React, { useState } from "react";
import './Best.css'
import  OverAllTier from './OverAllTier'
import { getPerk } from "../UseFulFunctions/Functions"

// Prop Drilling Side Effects, Don't Focus
const Best = (props) => {

    return <main>
        {props.tiers.length > 0 ? props.tiers.map((tier, index) => 
        (tier.Stats.Sword && tier.Stats.Potion && tier.Stats.NetheritePot &&
          tier.Stats.SMP && tier.Stats.Crystal && tier.Stats.UHC && tier.Stats.Axe 
        ) ?  <OverAllTier displayStats = {props.displayStatsFunc} key = {index} id = {index + 1} UserName = {tier.IGN} 
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
            Wins = {Object.values(tier.Stats).reduce((sum, current) => {
              return sum + (current && current.wins ? current.wins : 0);
            }, 0)} 
            Losses = {Object.values(tier.Stats).reduce((sum, current) => {
              return sum + (current && current.losses ? current.losses : 0);
            }, 0)} 
            Perk = {getPerk(tier)} 
            Region = {tier.region}></OverAllTier> : ""): <p className="notiers">No Tiers Available</p>}
    </main>
}
export default Best