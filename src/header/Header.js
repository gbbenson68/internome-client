import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  align-items: center;
  /* border-bottom: 1px solid $charcoal; */
  display: flex;
  height: 100px;
  padding: 0 20px;

  a,
  span {
    font-size: 1.2em;
    margin: 0 15px;
    text-decoration: none;
  }

  a {
    color: green;
  }

  > nav {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }

  @media (max-width: 600px) {
    .main-header {
      flex-direction: column;
      font-size: .7em;
      height: auto;
      padding: 10px;

      h1 {
        font-size: 2.5em;
      }
    }
  }

  @media (max-width: 450px) {
    .main-header > nav {
      flex-direction: column;
      width: 100%;

      a,
      span {
        border: 1px solid $charcoal;
        margin-bottom: 5px;
        text-align: center;
        width: 80%;
      }
    }
  }
`

const authenticatedOptions = (
  <Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/profiles">Profiles</Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Link to="/">Home</Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <HeaderStyle>
    <h1>Internome</h1>
    <span><h5>The Interval-based Metronome</h5></span>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      {/* alwaysOptions */}
    </nav>
  </HeaderStyle>
)

export default Header
