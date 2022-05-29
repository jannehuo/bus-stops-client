import type { Component } from 'solid-js'
import Stops from './components/Stops'

import './app.css'

const App: Component = () => {
  return (
    <main>
      <h1>Stops</h1>
      <Stops />
    </main>
  )
}

export default App
