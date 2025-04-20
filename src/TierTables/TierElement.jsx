import {React, useState, useEffect} from "react";
import "./TierElement.css"

export default function TierElement(props) {
  const [tiercolor, settiercolor] = useState("");
  const [regioncolour, setRegionColor] = useState({});
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // txt aka border left
  useEffect(() => {
    settiercolor(props.high ? "var(--tier-bk-color-ht)" : "var(--tier-bk-color-lt)");
    if (props.Region === "EU") {
      setRegionColor({ txt: "var(--eu-border-left-color)" });
    } else if (props.Region === "NA") {
      setRegionColor({ txt: "var(--na-border-left-color)" });
    } else if (props.Region === "AS") {
      setRegionColor({ txt: "var(--as-border-left-color)" });
    } else if (props.Region === "SA") {
      setRegionColor({ txt: "var(--sa-border-left-color)" });
    } else if (props.Region === "ME") {
      setRegionColor({ txt: "var(--me-border-left-color)" });
    } else if (props.Region === "AU") {
      setRegionColor({ txt: "var(--au-border-left-color)" });
    } else if (props.Region === "AF") {
      setRegionColor({ txt: "var(--af-border-left-color)" });
    }
  }, [props.high, props.Region]); // Add dependencies to useEffect

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const backgroundColor = isHovered ? 'var(--tier-bk-hover-color)' : tiercolor; // Example hover color

  return (
    <>
      <div
        className="tierElement"
        style={{
          backgroundColor: backgroundColor, // Use the dynamic background color
          borderLeftColor: regioncolour.txt ? `${regioncolour.txt}` : "", // Corrected borderLeft
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
