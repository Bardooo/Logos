import React from 'react'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './scss/app.scss'; 

function App() {
  return <div className="App">
    <Header />
    <Navigation />
    <Footer />
  </div>
}

export default App;
