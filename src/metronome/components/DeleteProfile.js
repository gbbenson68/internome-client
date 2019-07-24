import React, { Fragment, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

const DeleteProfile = (props) => {
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${props.user.token}` }
    })
      .then(() => props.alert(messages.deleteProfileSuccess, 'success'))
      .catch(error => {
        console.error(error)
        props.alert(messages.deleteProfileFailure, 'danger')
      })
  }, [])

  return (
    <Fragment>
      <Link to='/profiles'>Back to all profiles</Link>
    </Fragment>
  )
}

export default withRouter(DeleteProfile)
