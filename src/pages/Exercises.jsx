import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export default function Exercises() {
  return (
    <div className="App-header">
      <h1>AS Fitness</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <h2>Exercises</h2>
      <h3>Kids</h3>
      <p>
        Join us for a 15 Minute HIIT workout that is friendly for Kids to join
        in! This is a fun, full body workout to do as a family, group, PE class,
        and much more. This workout is great for building strength and
        conditioning with basic, foundational exercises. All levels of fitness
        are welcome, and you can do this workout petty much anywhere. We have
        exercise modifications throughout the video and we've provided some
        alternatives down below for exercises that may be a tad difficult. We
        had so much fun with this workout and we hope you do to! Be sure to
        leave a comment and let us know what your favorite exercises was!
      </p>
      <ReactPlayer url="https://www.youtube.com/watch?v=326GR2A7q-s" />
      <h3>Adults</h3>
      <p>
        a Full Body Workout that can do whenever and wherever you like. You
        don't need any equipment or weights!! Targets the muscles of your whole
        body and gives you a QUICK SWEAT! The video is in full length which
        means you can just follow whatever Im doing 30s for each exercise. There
        are two 1min rests in between. If you need to pause longer - feel free
        to do so. If you don't need a break - skip them!
      </p>
      <ReactPlayer url="https://www.youtube.com/watch?v=UBMk30rjy0o" />
      <h3>Senior</h3>
      <p>
        This short home workout is designed for seniors or for anyone looking
        for something a bit lighter. Take care when exercises and if you don't
        already exercise regularly take it slowly at first.
      </p>
      <ReactPlayer url="https://www.youtube.com/watch?v=A2wp8Ipxn9s" />
    </div>
  )
}
