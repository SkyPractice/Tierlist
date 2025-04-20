
import SwordLogo from '../assets/Sword.png'
import DiapotLogo from '../assets/Diapot.png'
import NethLogo from '../assets/nethpot.gif'
import UhcLogo from '../assets/uhc.png'
import SmpLogo from '../assets/Smp.png'
import AxeLogo from '../assets/Axe.png'
import CrystalLogo from '../assets/Crystal.png'

export const getImgByName = (name) => {
    if (name == "Sword") {
        return SwordLogo;
    }
    else if (name == "Potion") {
        return DiapotLogo;
    }
    else if (name == "NetheritePot") {
        return NethLogo;
    }
    else if (name == "UHC") {
        return UhcLogo;
    }
    else if (name == "SMP") {
        return SmpLogo;
    }
    else if (name == "Axe") {
        return AxeLogo;
    }
    else if (name == "Crystal") {
        return CrystalLogo
    }
    else {
        return "";
    }
}

// Aka Get Title
export const getPerk = (tier) => {
    const elo = Object.values(tier.Stats).reduce((sum, current) => {
        return sum + (current && current.elo ? current.elo : 0);
      }, 0)
    if(elo > 18000){ return "Combat Master"; }
    else if(elo > 11000){ return "Combat Ace"; }
    else if(elo > 8000){ return "Combat Specialist"; }
    else if(elo > 5400){ return "Combat Cadet"; }
    else { return "Combat Newbie"; }


}

// A Number from 1 to 5
/**
 * 
 * @param {Number} ch 
 * @returns 
 */
export const getRomanianChar = (ch) => {
    if (ch == 1) {
        return "I";
    }
    else if (ch == 2) {
        return "II";
    }
    else if (ch == 3) {
        return "III"
    }
    else if (ch == 4) {
        return "IV"
    }
    else if (ch == 5) {
        return "V"
    }
    else {
        return String(ch);
    }
}

export function isDigit(char) {
    return !isNaN(Number(char));
}
  

// "13213/21333" -> how an arg should look like
/**
 * 
 * @param {String} str 
 * @returns Number
 */
export const getDuraPercentage = (str)=>{

    if(!str || str.length == 0){return 0;}
    // there's a / between the 2 nums
    let f_num = 0;
    let i = 0;
    let s_num = 0;
    for(; i < str.length; i++){
        if(!isDigit(str[i])) break;
        f_num = (f_num * 10) + (Number(str[i]));
    }
    i += 1;
    for(; i < str.length; i++){
        s_num = (s_num * 10) + (Number(str[i]));
    }
    return f_num / s_num;
}