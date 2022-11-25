import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from "./pages/Login"

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
