import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

const DisplayProfiles = (props) => {
  const [profiles, setProfiles] = useState([])
  // console.log(props.alert)
  // console.log(props.user.token)

  useEffect(() => {
    // console.log(props)
    axios({
      url: `${apiUrl}/profiles`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${props.user.token}` }
    })
      .then(response => setProfiles(response.data.profiles))
      .catch((error) => {
        console.error(error.message)
        props.alert(messages.listProfilesFailure, 'danger')
        setProfiles([])
      })
  }, [])

  const profilesJsx = profiles.map(profile => (
    <li key={profile._id}>
      <Link to={`/profiles/${profile._id}`}>{profile.name}</Link>
    </li>
  ))

  return (
    <Fragment>
      <ul>
        {profilesJsx}
      </ul>
      <Link to={'/profiles/create'}>Create New Profile</Link>
    </Fragment>
  )
}

export default DisplayProfiles
