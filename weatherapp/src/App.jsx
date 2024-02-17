import { useState } from 'react'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import  "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
      <h1>Weather App</h1>
      <Input />
      <Button value="Search"/>
      <Card />
      <Button value="refresh"/>
      </div>
  )
}

export default App
