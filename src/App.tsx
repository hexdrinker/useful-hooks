import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <img
          src={viteLogo}
          className='logo'
          alt='Vite logo'
        />
        <img
          src={reactLogo}
          className='logo react'
          alt='React logo'
        />
      </div>
      <h1>Useful React Hooks</h1>
      <div className='card'>
        <Link to='/use-input'>useInput</Link>
      </div>
    </>
  )
}

export default App
