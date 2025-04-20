import { useEffect, useState } from 'react'
import Header from './HeaderAndSideBar/Header'
import SideBar from './HeaderAndSideBar/sidebar'
import Best from './LeaderBoard/Best';
import TierTable from './TierTables/TableTiers'
import './App.css' // UseLess And Deprecated
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TierPreview from './TierPreview/TierPreview'

function App() {

  const [showTierPreview, setShowTierPreview] = useState(false);
  const [currentStats, setCurrentStats] = useState({});
  const [Tiers, setTiers] = useState([]);
  
  // Fetches The Api For People On Site Join
  useEffect(() => {
    // api fetching ( all the players )
    fetch("https://api.skypractice.xyz/api").then(res => res.json()).
      then(ress => {
        if (ress.length > 0) {
          setTiers([...ress].sort((a, b) => Object.values(b.Stats).reduce((sum, current) => {
            return sum + (current && current.elo ? current.elo : 0);
          }, 0) - Object.values(a.Stats).reduce((sum, current) => {
            return sum + (current && current.elo ? current.elo : 0);
          }, 0)
          ))
        }
        else {
          setTiers([])
        }
      }).catch(err => {
        console.log(err.message)
        setTiers([])
      })
  }, [])

  // Escape On Click
  useEffect(() => {
    window.addEventListener("keydown", function (evt) {
      if (showTierPreview && evt.key == "Escape") {
        setShowTierPreview(false)
      };
    });
  }, [showTierPreview])

  // Displays The Player Stats By Name
  const displayStats = (playerName) => {
    // Sets The Stats
    const myindex = Tiers.findIndex(e => e.IGN == playerName);
    if (myindex == -1) {
      alert("No Results Found !");
      return;
    }
    const mywins = Object.values(Tiers[myindex].Stats).reduce((sum, current) => {
      return sum + (current && current.wins ? current.wins : 0);
    }, 0)
    const mylosses = Object.values(Tiers[myindex].Stats).reduce((sum, current) => {
      return sum + (current && current.losses ? current.losses : 0);
    }, 0)
    const myelo = Object.values(Tiers[myindex].Stats).reduce((sum, current) => {
      return sum + (current && current.elo ? current.elo : 0);
    }, 0)

    // goofy usestate prop thing to trigger changes
    setCurrentStats({ tier: Tiers[myindex], index: myindex, wins: mywins, losses: mylosses, elo: myelo });
    setShowTierPreview(true);
  }

  const stopStats = () => {
    setShowTierPreview(false);
  }

  return (
    <>
      <>
        <Header displayStatsFunc={displayStats}></Header>
        <div style={{ display: "flex" }}>
          <SideBar />
          <Routes>
            {/* Basic Prop Drilling */}
            <Route path="/Tierlist" element={<Best tiers={Tiers} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Sword" element={<TierTable tiers={Tiers} mode={"Sword"} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Nethpot" element={<TierTable tiers={Tiers} mode={"Nethpot"} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Diapot" element={<TierTable tiers={Tiers} mode={"Diapot"} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Uhc" element={<TierTable tiers={Tiers} mode={"Uhc"} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Smp" element={<TierTable tiers={Tiers} mode={"Smp"} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Crystal" element={<TierTable tiers={Tiers} mode={"Crystal"} displayStatsFunc={displayStats} />} />
            <Route path="Tierlist/Axe" element={<TierTable tiers={Tiers} mode={"Axe"} displayStatsFunc={displayStats} />} />
          </Routes>
        </div>
        {showTierPreview && <TierPreview Stats={currentStats} stopstatsfunc={stopStats}></TierPreview>}
      </>
    </>
  )
}

export default App
