import { useState } from 'react'
import MyComponents from './MyComponents';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponents/>
    </>
  )
}

export default App
