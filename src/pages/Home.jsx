import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AS Fitness</h1>
        <h2>Online solution to bring families together to keep fit</h2>
        <div className="familyimg" data-testid="family-img"></div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </header>
      <div>
        Exercise together with your friends and family from the comfort of your
        own home, no matter your age or fitness level.{' '}
      </div>
    </div>
  )
}
