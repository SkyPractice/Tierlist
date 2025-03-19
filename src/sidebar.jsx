import React, { useState, useEffect } from "react";
import './sidebar.css';
import SwordLogo from './assets/Sword.png'
import DiapotLogo from './assets/Diapot.png'
import NethLogo from './assets/nethpot.gif'
import UhcLogo from './assets/uhc.png'
import SmpLogo from './assets/Smp.png'
import AxeLogo from './assets/Axe.png'
import CrystalLogo from './assets/Crystal.png'
import { Link, useNavigate, useLocation  } from 'react-router-dom';

export default function SideBar(props) {
    const navigate = useNavigate();
    const [circleptr, setcircleptr] = useState("none")

    const myClickHandler = (event) => {
        // Your custom logic here
        // ...
        setcircleptr(event.currentTarget.getAttribute('href').slice(1))
        // Prevent the default link behavior
        event.preventDefault();
        // Always navigate after your custom logic
        navigate(event.currentTarget.getAttribute('href'));
      };
      const location =  useLocation()

      useEffect(() => {
        if(location.pathname == "/"){
            setcircleptr("none")
        }
      }, [location.pathname]);

    return <nav>
        <Link to={'/Sword'} onClick={myClickHandler} className="sideBarLink" style={{border : circleptr == "Sword" ? "solid white" : "none"}}><img className="sideBarIcon" src={SwordLogo}></img></Link>
        <Link to={'/Diapot'} onClick={myClickHandler} className={"sideBarLink"} style={{border : circleptr == "Diapot" ? "solid white" : "none"}}><img className="sideBarIcon" src={DiapotLogo}></img></Link>
        <Link to={'/Nethpot'} onClick={myClickHandler} className={"sideBarLink"} style={{border : circleptr == "Nethpot" ? "solid white" : "none"}}><img className="sideBarIcon" src={NethLogo}></img></Link>
        <Link to={'/Uhc'} onClick={myClickHandler} className={"sideBarLink"} style={{border : circleptr == "Uhc" ? "solid white" : "none"}}><img className="sideBarIcon" src={UhcLogo}></img></Link>
        <Link to={'/Smp'} onClick={myClickHandler} className={"sideBarLink"} style={{border : circleptr == "Smp" ? "solid white" : "none"}}><img className="sideBarIcon" src={SmpLogo}></img></Link>
        <Link to={'/Axe'} onClick={myClickHandler} className={"sideBarLink"} style={{border : circleptr == "Axe" ? "solid white" : "none"}}><img className="sideBarIcon" src={AxeLogo}></img></Link>
        <Link to={'/Crystal'} onClick={myClickHandler} className={"sideBarLink"} style={{border : circleptr == "Crystal" ? "solid white" : "none"}}><img className="sideBarIcon" src={CrystalLogo}></img></Link>

    </nav>
}