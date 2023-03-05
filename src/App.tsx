import React from 'react'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Info from './components/Info'
import './scss/app.scss'; 

function App() {
  return <div className="App">
    <Header />
    <Navigation />
    <Info />
  </div>
}

export default App;
