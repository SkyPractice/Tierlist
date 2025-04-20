import React, { useEffect, useState } from "react";
import { getRomanianChar, getDuraPercentage } from "../UseFulFunctions/Functions";
import { Hearts } from "./Heart";
import "./Inventories.css"


const InventoryItemDetails = (props) => {
    return <div className="InventoryItemNameCon">
        <h1 className="InventoryItemName">{props.itemName}</h1>
        {props.itemEnchants && <div className="InventoryItemEnchantmentsCon">
            {props.itemEnchants.map(i => <h1 className="InventoryItemEnchantments">{i.name + " " + (i.level ? getRomanianChar(i.level) : "")}</h1>)}
        </div>}
        
    </div>
}

const InventorySlot = (props) => {
    const [showName, setShowName] = useState(false);
    return <div className="InventorySlot" onMouseEnter={e => { setShowName(true) }} onMouseLeave={e => { setShowName(false) }}>

        {props.itemName != "AIR" && <img src={"/Tierlist/item/" + props.itemName.toLowerCase() + ".png"}
            className="InventorySlotImg"></img>}
        {props.amount > 1 && <h3 className="InventoryItemCount">{props.amount}</h3>}
        {
            props.dura && !showName &&
            <div className="duraBarCon">
                <div className="duraBar" style={{width : (String(getDuraPercentage(props.dura) * 40) + "px")}}></div>
            </div>
            
        }
        
        {showName && <InventoryItemDetails itemName={props.itemName} itemEnchants={props.enchantments}></InventoryItemDetails>}
    </div>
}

const Hungers = (props) => {
    return <div className="hungers">{Array(Math.floor(props.num / 2)).fill(null).map(
        (_, index) =>
            <img src={heartImg}></img>
    )
    }</div>
}
export default function Inventories(props) {
    return <>
        <h1 className="InventoryTitle">Inventories</h1>
        <div className="InventoryCon">

            <div className="BigInvenCon">

                <div className="InventoryPlayer">
                    <img src={"https://mc-heads.net/head/" + props.Inven.IGN} className="InventoryPlayerHead"></img>
                    <h1 className="InventoryPlayerName">{props.Inven.IGN}</h1>
                </div>
                <div className="hpAndHunger">
                    { 
                        <Hearts num={props.Inven.IGN == props.Inven.player1_name ?
                        props.Inven.player1_stats.health : props.Inven.player2_stats.health}></Hearts>}

                </div>
                <div className="Inventory">
                    {props.Inven.IGN != props.Inven.player1_name ? props.Inven.player2_inventory.map(item => <InventorySlot enchantments={item.enchants} itemName={item.type} amount={item.amount} dura={item.durability}></InventorySlot>) :
                        props.Inven.player1_inventory.map(item => <InventorySlot enchantments={item.enchants} itemName={item.type} amount={item.amount} dura={item.durability}></InventorySlot>)}
                </div>
            </div>
            <div className="BigInvenCon">

                <div className="InventoryPlayer">
                    <img src={"https://mc-heads.net/head/" + (props.Inven.IGN == props.Inven.player1_name ? props.Inven.player2_name : props.Inven.player1_name)} className="InventoryPlayerHead"></img>
                    <h1 className="InventoryPlayerName">{props.Inven.IGN == props.Inven.player1_name ? props.Inven.player2_name : props.Inven.player1_name}</h1>
                </div>
                <div className="hpAndHunger">
                    <Hearts num={props.Inven.IGN != props.Inven.player1_name ?
                        props.Inven.player1_stats.health : props.Inven.player2_stats.health}></Hearts>
                </div>
                <div className="Inventory">
                    {props.Inven.IGN == props.Inven.player1_name ? props.Inven.player2_inventory.map(item => <InventorySlot enchantments={item.enchants} itemName={item.type} amount={item.amount}  dura={item.durability}></InventorySlot>) :
                        props.Inven.player1_inventory.map(item => <InventorySlot enchantments={item.enchants} itemName={item.type} amount={item.amount} dura={item.durability}></InventorySlot>)}
                </div>
            </div>
        </div></>
}