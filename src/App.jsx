import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
const evenHandel = () => {
  alert('clicked me')
}
const evenHandel3 = (num) => {
  alert(num + 5)
}
  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={evenHandel}>Click me</button>
      <button onClick={() => {alert('clicked mfe')}}>Click me</button>
      <button onClick={() => {evenHandel3(3)}}>Click me</button>
      <Counter></Counter>
      <Users></Users>
      {/* <button onClick={evenHandel}>Click me</button> */}
    </>
  )
}

export default App
