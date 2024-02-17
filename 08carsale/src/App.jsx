import { useState } from "react"
import Background from "./components/Background/Background";

function App() {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indule",text2:"your passions"},
    {text1:"Give in to",text2:""},
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App