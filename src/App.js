import './App.css'
import Home from './pages/Home'
import Exercises from './pages/Exercises'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
