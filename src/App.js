import React, { Component, Fragment } from 'react'
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
import DisplayInternome from './metronome/components/DisplayInternome'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/profilecreate' render={() =>
            <CreateProfile alert={this.alert} user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles/:id/delete' render={() =>
            <DeleteProfile alert={this.alert} user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles/:id/update' render={() =>
            <UpdateProfile alert={this.alert} user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles/:id' render={() =>
            <DisplayProfile alert={this.alert} user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/profiles' render={() =>
            <DisplayProfiles alert={this.alert} user={user} />}
          />
          <AuthenticatedRoute user={user} exact path='/displayinternome' render={() =>
            <DisplayInternome alert={this.alert} user={user} />}
          />
        </main>
      </Fragment>
    )
  }
}

export default App
