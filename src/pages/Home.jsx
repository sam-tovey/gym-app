import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AS Fitness</h1>
        <h2>
          <em>
            Want to keep your family fit from the comfort of your own home?
          </em>
        </h2>
        <p>
          We provide a selection of exercise videos and a community for people
          of all ages (3 to 83) and fitness levels to work out safely from their
          homes. Our exercises engage all the major muscle groups! Exercise
          together with your friends and family from the comfort of your own
          home, no matter your age or fitness level.
        </p>
        <div className="familyimg" data-testid="family-img"></div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/exercises">Exercises</Link>
        </ul>
      </header>
    </div>
  )
}
