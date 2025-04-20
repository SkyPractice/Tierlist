import {React, useState, useEffect} from "react";
import "./TierElement.css"

export default function TierElement(props) {
  const [tiercolor, settiercolor] = useState("");
  const [regioncolour, setRegionColor] = useState({});
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  useEffect(() => {
    settiercolor(props.high ? "rgb(22 , 22 , 22)" : "rgb(15 , 15 , 15)");
    if (props.Region === "EU") {
      setRegionColor({ background: "green", txt: "lightgreen" });
    } else if (props.Region === "NA") {
      setRegionColor({ background: "#442228", txt: "#d95c6a" });
    } else if (props.Region === "AS") {
      setRegionColor({ background: "#5e3e49", txt: "#af7f91" });
    } else if (props.Region === "SA") {
      setRegionColor({ background: "darkcyan", txt: "#5dccdc" });
    } else if (props.Region === "ME") {
      setRegionColor({ background: "#4d4525", txt: "#e5d386" });
    } else if (props.Region === "AU") {
      setRegionColor({ background: "#392e27", txt: "#d5ad80" });
    } else if (props.Region === "AF") {
      setRegionColor({ background: "#5e3e49", txt: "#af7f91" });
    }
  }, [props.high, props.Region]); // Add dependencies to useEffect

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? '#313a49' : tiercolor; // Example hover color

  return (
    <>
      <div
        className="tierElement"
        style={{
          backgroundColor: backgroundColor, // Use the dynamic background color
          borderLeftColor: regioncolour.background ? `${regioncolour.txt}` : "", // Corrected borderLeft
        }}
        onClick={() => {
          props.displayStatsFunc(props.txt);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="TableHead" src={"https://mc-heads.net/head/" + props.txt}></img>
        {props.txt}
      </div>
    </>
  );
}
