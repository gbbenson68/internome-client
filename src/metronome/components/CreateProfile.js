import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

import { withSnackbar } from 'notistack'

const CreateProfile = (props) => {
  // NOTE: We need to set the COMPLETE list of properties here or else
  //       React thinks that the individual properties are uncontrolled!!
  const [profile, setProfile] = useState({
    name: '',
    minTempo: '',
    maxTempo: '',
    duration: ''
  })

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(profile)
    axios({
      url: `${apiUrl}/profiles`,
      method: 'POST',
      headers: { 'Authorization': `Bearer ${props.user.token}` },
      data: { profile: profile }
    })
      .then(response => props.history.push(`/profiles/${response.data.profile._id}`))
      .then(() => props.enqueueSnackbar(messages.createProfileSuccess, { variant: 'success' }))
      .catch(error => {
        console.error(error)
        props.enqueueSnackbar(messages.createProfileFailure, { variant: 'error' })
        setProfile({})
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Profie Name"
        value={profile.name}
        name="name"
        onChange={handleChange}
        required
      />

      <label>Minimum Tempo</label>
      <input
        type="number"
        placeholder="60"
        min={40}
        max={240}
        step={1}
        value={profile.minTempo}
        name="minTempo"
        onChange={handleChange}
        required
      />

      <label>Maximum Tempo</label>
      <input
        type="number"
        placeholder="120"
        min={40}
        max={240}
        step={1}
        value={profile.maxTempo}
        name="maxTempo"
        onChange={handleChange}
        required
      />

      <label>Duration</label>
      <input
        type="number"
        placeholder="30"
        min={2}
        max={30}
        step={1}
        value={profile.duration}
        name="duration"
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
      <Link to='/profiles'>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default withSnackbar(withRouter(CreateProfile))
