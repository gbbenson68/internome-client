// import React, { useState } from 'react'
import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const DisplayInternome = (props) => {
  const thisProfile = props.location.profile
  console.log(thisProfile)
  return (
    <Fragment>
      <p>WE GOT HERE!!</p>
    </Fragment>
  )
}

export default withRouter(DisplayInternome)
