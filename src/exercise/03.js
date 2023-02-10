// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import {Switch} from '../switch'
import {createContext, useContext, useState} from 'react'

const ToggleContext = createContext()

function Toggle({children}) {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider value={{on, toggle}}>
      {children}
    </ToggleContext.Provider>
  )
}

const useToggle = () => {
  const context = useContext(ToggleContext)

  if (!context) {
    throw new Error(
      'Please ensure to wrap your components with <Toggle></Toggle> ',
    )
  }
  return context
}

function ToggleOn({children}) {
  const {on} = useToggle()
  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggle()
  return on ? null : children
}

function ToggleButton({...props}) {
  const {on, toggle} = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

// ERROR CASE: this will trigger the error message
//const App = () => <ToggleButton />

function App() {
  return (
    <div>
      <Toggle>
        <div>
          <ToggleOn>The button is on</ToggleOn>
        </div>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
