import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

import { withSnackbar } from 'notistack'

const DisplayProfiles = (props) => {
  const [profiles, setProfiles] = useState([])
  // console.log(props.user.token)

  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${props.user.token}` }
    })
      .then(response => setProfiles(response.data.profiles))
      .catch(error => {
        console.error(error)
        props.enqueueSnackbar(messages.listProfilesFailure, { variant: 'error' })
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
      <h3>Internome Profiles</h3>
      <ul>
        {profilesJsx}
      </ul>
      <Link to={'/profilecreate'}>Create New Profile</Link>
    </Fragment>
  )
}

export default withSnackbar(DisplayProfiles)
