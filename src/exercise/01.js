// Context Module Functions
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {UserProvider} from './01/context/user-context'
import {UserSettings, UserDataDisplay} from './01/screens/user-profile'

function App() {
  return (
    <div
      style={{
        minHeight: 350,
        width: 300,
        backgroundColor: '#ddd',
        borderRadius: 4,
        padding: 10,
      }}
    >
      <UserProvider>
        <UserSettings />
        <UserDataDisplay />
      </UserProvider>
    </div>
  )
}

export default App
