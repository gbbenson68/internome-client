import React, { Fragment, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const DisplayInternome = (props) => {
  const thisProfile = props.location.profile
  // console.log(thisProfile)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    console.log(isRunning ? 'YES' : 'NO')
    if (isRunning) {
      runInternome()
    }
  }, [isRunning])

  const runInternome = () => {
    const audioCtx = new AudioContext()
    const freq = 880
    const zero = 0.00001

    const metronome = (bpm = 60, iterations = 1) => {
      const now = audioCtx.currentTime
      // const beatsPerSecond = bpm / 60.0
      // const quarterBeatsPerBar = 4
      // const beatsPerBar = beatsPerSecond * quarterBeatsPerBar
      // const beatLength = quarterBeatsPerBar / beatsPerBar
      const beatLength = 60 / bpm
      let gainNode = audioCtx.createGain()
      let osc = audioCtx.createOscillator()
      gainNode.connect(audioCtx.destination)
      osc.connect(gainNode)

      gainNode.gain.exponentialRampToValueAtTime(zero, now + beatLength / 16)

      osc.frequency.value = freq
      osc.start(now)
      osc.stop(now + beatLength)

      osc.onended = () => {
        osc = null
        gainNode = null
        metronome(bpm, ++iterations)
      }
    }

    metronome(60, 0)
  }

  return (
    <Fragment>
      <h1>{thisProfile.name}</h1>
      <p>Min Tempo: {thisProfile.minTempo}</p>
      <p>Max Tempo: {thisProfile.maxTempo}</p>
      <p>Duration: {thisProfile.duration}</p>
      <button onClick={() => setIsRunning(true)}>Start Internome</button>
      <button onClick={() => setIsRunning(false)}>Stop Internome</button>
    </Fragment>
  )
}

export default withRouter(DisplayInternome)
