import React, { useState, useEffect, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

const DisplayProfile = (props) => {
  const [profile, setProfile] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  // console.log(props)

  useEffect(() => {
    if (!isLoaded) {
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

      setIsLoaded(true)
    }

    // Emulate componentWillUnmount() lifecycle method
    return () => {
      setIsRunning(false)
      setIsLoaded(false)
    }
  }, [])

  /*
  ** ***** METRONOME CODE STARTS HERE *****
  */
  // let isRunning = false // Specifies if Internome is running
  // const clickArray = [] // Array of beat lengths, gain & oscillator nodes
  const startInternome = () => {
    setIsRunning(true)
    runInternome()
  }

  const stopInternome = () => {
    setIsRunning(false)
  }

  const playClick = (audioCtx, elapsedTime, beatLength, lastTime, freq, zero) => {
    console.log(isRunning)
    const now = audioCtx.currentTime
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
        playClick(audioCtx, elapsedTime + beatLength, beatLength, now, freq, zero)
      }
    }
  }

  const runInternome = () => {
    // For browser compatibility
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const audioCtx = new AudioContext()
    const execTime = audioCtx.currentTime
    const freq = 880
    const zero = 0.00001
    const beatLength = 60 / profile.minTempo
    const elapsedTime = 0

    playClick(audioCtx, elapsedTime, beatLength, execTime, freq, zero)
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
      <button onClick={startInternome}>Start Internome</button>
      <button onClick={stopInternome}>Stop Internome</button>
      <Link to='/profiles'>Back to all profiles</Link>
    </Fragment>
  )
}

export default withRouter(DisplayProfile)
