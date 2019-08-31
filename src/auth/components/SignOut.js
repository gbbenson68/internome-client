import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../api'
import messages from '../messages'

import { withSnackbar } from 'notistack'

class SignOut extends Component {
  componentDidMount () {
    const { enqueueSnackbar, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => enqueueSnackbar(messages.signOutSuccess, { variant: 'success' }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withSnackbar(withRouter(SignOut))
