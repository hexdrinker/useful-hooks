import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const hooks1 = [
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
    {
      name: 'useClick',
      link: '/use-click',
    },
    {
      name: 'useConfirm',
      link: '/use-confirm',
    },
    {
      name: 'usePreventLeave',
      link: '/use-prevent-leave',
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
        {hooks1.map((hook, index) => (
          <Link
            className='hook'
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
