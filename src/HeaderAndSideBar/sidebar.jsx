import React, { useState, useEffect } from "react";
import './sidebar.css';
import SwordLogo from '../assets/Sword.png'
import DiapotLogo from '../assets/Diapot.png'
import NethLogo from '../assets/nethpot.gif'
import UhcLogo from '../assets/uhc.png'
import SmpLogo from '../assets/Smp.png'
import AxeLogo from '../assets/Axe.png'
import CrystalLogo from '../assets/Crystal.png'
import OverAllLogo from '../assets/overall.svg'
import { Link, useNavigate, useLocation  } from 'react-router-dom';

export default function SideBar(props) {
    const navigate = useNavigate();
    const [circleptr, setcircleptr] = useState("none")

    const myClickHandler = (event) => {
        const str = event.currentTarget.getAttribute('href')
        setcircleptr(str.split('/')[2])
        event.preventDefault();
        navigate(event.currentTarget.getAttribute('href'));
      };
      const location =  useLocation()

      useEffect(() => {
        if(location.pathname == "/Tierlist"){
            setcircleptr("none")
        }
      }, [location.pathname]);

    return <nav>
        <Link to={'/Tierlist'} onClick={myClickHandler} className="sideBarLink" style={{}}><img className="sideBarIcon" src={OverAllLogo}></img>{circleptr == "none" && <div className="Selectionptr">OverAll</div>}</Link>
        <Link to={'Tierlist/Sword'} onClick={myClickHandler} className="sideBarLink" style={{}}><img className="sideBarIcon" src={SwordLogo}></img>{circleptr == "Sword" && <div className="Selectionptr">Sword</div>}</Link>
        <Link to={'Tierlist/Diapot'} onClick={myClickHandler} className={"sideBarLink"} style={{}}><img className="sideBarIcon" src={DiapotLogo}></img>{circleptr == "Diapot" && <div className="Selectionptr">Diapot</div>}</Link>
        <Link to={'Tierlist/Nethpot'} onClick={myClickHandler} className={"sideBarLink"} style={{}}><img className="sideBarIcon" src={NethLogo}></img>{circleptr == "Nethpot" && <div className="Selectionptr">Nethpot</div>}</Link>
        <Link to={'Tierlist/Uhc'} onClick={myClickHandler} className={"sideBarLink"} style={{}}><img className="sideBarIcon" src={UhcLogo}></img>{circleptr == "Uhc" && <div className="Selectionptr">Uhc</div>}</Link>
        <Link to={'Tierlist/Smp'} onClick={myClickHandler} className={"sideBarLink"} style={{}}><img className="sideBarIcon" src={SmpLogo}></img>{circleptr == "Smp" && <div className="Selectionptr">Smp</div>}</Link>
        <Link to={'Tierlist/Axe'} onClick={myClickHandler} className={"sideBarLink"} style={{}}><img className="sideBarIcon" src={AxeLogo}></img>{circleptr == "Axe" && <div className="Selectionptr">Axe</div>}</Link>
        <Link to={'Tierlist/Crystal'} onClick={myClickHandler} className={"sideBarLink"} style={{}}><img className="sideBarIcon" src={CrystalLogo}></img>{circleptr == "Crystal" && <div className="Selectionptr">Crystal</div>}</Link>

    </nav>
}