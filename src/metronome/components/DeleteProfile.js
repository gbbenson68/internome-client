import React, { Fragment, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../messages'

import { withSnackbar } from 'notistack'

const DeleteProfile = (props) => {
  useEffect(() => {
    axios({
      url: `${apiUrl}/profiles/${props.match.params.id}`,
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${props.user.token}` }
    })
      .then(() => props.enqueueSnackbar(messages.deleteProfileSuccess, { variant: 'success' }))
      .catch(error => {
        console.error(error)
        props.enqueueSnackbar(messages.deleteProfileFailure, { variant: 'error' })
      })
  }, [])

  return (
    <Fragment>
      <Link to='/profiles'>Back to all profiles</Link>
    </Fragment>
  )
}

export default withSnackbar(withRouter(DeleteProfile))
