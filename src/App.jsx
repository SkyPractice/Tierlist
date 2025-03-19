import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import SideBar from './sidebar'
import Best from './Best';
import TierTable from './TableTiers'
import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import TierPreview from './TierPreview'

function App() {
  const [showTierPreview , setShowTierPreview] = useState(false);
  const [currentStats , setCurrentStats] = useState({});
  const [Tiers, setTiers] = useState([]);
  useEffect(()=>{
     fetch("api/proxy/data", {mode : "no-cors" ,   headers: {
      'Origin': window.location.origin, // or 'http://yourdomain.com' if you know the origin
      'X-Requested-With': 'XMLHttpRequest', // This is commonly used for AJAX requests
    }}).then(res => res.json()).
      then(ress => {
        console.log(ress)
        if(ress.length > 0){
         setTiers([...ress].sort((a , b) => Object.values(b.Stats).reduce((sum, current) => {
          return sum + (current && current.elo ? current.elo : 0);
        }, 0) - Object.values(a.Stats).reduce((sum, current) => {
          return sum + (current && current.elo ? current.elo : 0);
        }, 0)
        ))
        }
        else {
          setTiers([])
        }
       }).catch(err => {console.log(err.message)
        setTiers([])
     })
   }, [])
   const displayStats = (playerName) => {
      const myindex = Tiers.findIndex(e => e.IGN == playerName);
      if(myindex == -1){
        alert("UserName Not Found !");
        return;
      }
      setCurrentStats({tier : Tiers[myindex], index : myindex});
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
          <Route path="/SkyPractice" element={<Best tiers={Tiers} displayStatsFunc={displayStats} />} />
          <Route path="/Sword" element={<TierTable tiers={Tiers} mode={"Sword"} displayStatsFunc={displayStats} />} />
          <Route path="/Nethpot" element={<TierTable tiers={Tiers} mode={"Nethpot"} displayStatsFunc={displayStats} />} />
          <Route path="/Diapot" element={<TierTable tiers={Tiers} mode={"Diapot"} displayStatsFunc={displayStats} />} />
          <Route path="/Uhc" element={<TierTable tiers={Tiers} mode={"Uhc"} displayStatsFunc={displayStats} />} />
          <Route path="/Smp" element={<TierTable tiers={Tiers} mode={"Smp"} displayStatsFunc={displayStats} />} />
          <Route path="/Crystal" element={<TierTable tiers={Tiers} mode={"Crystal"} displayStatsFunc={displayStats} />} />
          <Route path="/Axe" element={<TierTable tiers={Tiers} mode={"Axe"} displayStatsFunc={displayStats} />} />
        </Routes>
      </div>
      {showTierPreview && <TierPreview Stats={currentStats} stopstatsfunc={stopStats}></TierPreview>}
    </>
    </>
  )
}

export default App
