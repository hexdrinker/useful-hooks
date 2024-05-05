import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const hooks = [
    {
      name: 'useInput',
      link: '/use-input',
    },
    {
      name: 'useTabs',
      link: '/use-tabs',
    },
    {
      name: 'useTitle',
      link: '/use-title',
    },
  ]

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
        {hooks.map((hook, index) => (
          <Link
            to={hook.link}
            key={index}
          >
            {hook.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default App
