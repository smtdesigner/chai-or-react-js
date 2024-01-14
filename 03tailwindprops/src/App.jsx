import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
  <h1 className=' bg-green-700 mb-5'>tailwind css testing</h1>
    
   <Cards username="sumitji" btnText="clickme" />
   <Cards username="somya" btnText="vizitme"/>
   <Cards username="satyam" />
    </>
  )
}

export default App
