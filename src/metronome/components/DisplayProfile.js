import React, { useState, useEffect, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

const DisplayProfile = (props) => {
  const [profile, setProfile] = useState({})
  // console.log(props)

  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${props.user.token}` }
    })
      .then(response => setProfile(response.data.profile))
      .catch(error => {
        console.error(error)
        props.alert(messages.showProfileFailure, 'danger')
        setProfile({})
      })
  }, [])

  /*
  ** ***** METRONOME CODE STARTS HERE *****
  */
  let isRunning = false
  const startMetronome = () => {
    isRunning = true
    runInternome()
  }

  const stopMetronome = () => {
    isRunning = false
  }

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
        if (isRunning) {
          metronome(bpm, ++iterations)
        }
      }
    }

    metronome(60, 0)
  }
  /*
  ** ***** METRONOME CODE ENDS HERE *****
  */

  return (
    <Fragment>
      <h2>Profile: {profile.name}</h2>
      <p>Minimum Tempo: {profile.minTempo}</p>
      <p>Maximum Tempo: {profile.maxTempo}</p>
      <p>Duration: {profile.duration}</p>
      <Link to={`/profiles/${props.match.params.id}/update`}>
        <button>Edit</button>
      </Link>
      <Link to={`/profiles/${props.match.params.id}/delete`} user={props.user}>
        <button>Delete</button>
      </Link>
      <button onClick={startMetronome}>Start Internome</button>
      <button onClick={stopMetronome}>Stop Internome</button>
      <Link to='/profiles'>Back to all profiles</Link>
    </Fragment>
  )
}

export default withRouter(DisplayProfile)
