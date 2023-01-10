import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useStateWithHistory from './hooks/useStateWithHistory'

function App() {
  
  useEffect(()=>{
    const [value,
      setValue,
      goBack,
      goForward,
      history
          ] = useStateWithHistory(10)
  
          console.log(value)
          setValue(20)
          console.log(history)
  },[])

  return (


    <div className="App">
      
    </div>
  )
}

export default App
