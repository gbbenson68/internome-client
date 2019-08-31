import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import DisplayProfiles from './metronome/components/DisplayProfiles'
import DisplayProfile from './metronome/components/DisplayProfile'
import CreateProfile from './metronome/components/CreateProfile'
import DeleteProfile from './metronome/components/DeleteProfile'
import UpdateProfile from './metronome/components/UpdateProfile'

import { SnackbarProvider } from 'notistack'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <SnackbarProvider maxSnack={3}>
        <Header user={user} />
        <main>
          <Route path='/sign-up' render={() => (
            <SignUp setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/profilecreate' render={() =>
            <CreateProfile user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles/:id/delete' render={() =>
            <DeleteProfile user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles/:id/update' render={() =>
            <UpdateProfile user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles/:id' render={() =>
            <DisplayProfile user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles' render={() =>
            <DisplayProfiles user={user} />}
          />
        </main>
      </SnackbarProvider>
    )
  }
}

export default App
