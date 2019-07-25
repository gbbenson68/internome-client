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
      <Link to='/profiles'>Back to all profiles</Link>
    </Fragment>
  )
}

export default withRouter(DisplayProfile)
