// import React, { useState } from 'react'
import React from 'react'
// import { Route } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import '../css/metronome.scss'

const MetronomeMain = (props) => {
  // const [profileName, setProfileName] = useState('')
  // const [minTempo, setMinTempo] = useState(0)
  // const [maxTempo, setMaxTempo] = useState(0)
  // const [duration, setDuration] = useState(0)

  // useEffect(() => {
  //   setProfile({})
  // }, [])

  const startMetronome = (props) => {
    // const minTempo = 60
    // const maxTempo = 120
    // const context = new AudioContext()
    //
  }

  return (
    <Container>
      <Row>
        <Col xs={1}>
          <Button variant="info" className='met-button' onClick={startMetronome}>Start</Button>
          <br/>
          <Button variant="info" className='met-button'>Stop</Button>
          <br/>
          <Button variant="info" className='met-button'>Setup</Button>
        </Col>
        <Col xs={11}>
          <Row xs={12} id='main-display' className='main-display'></Row>
          <Row xs={12}>
            <div className='info-display'>
              <span className='info-box'>current tempo</span>
              <span className='info-box'>elapsed time</span>
              <span className='info-box'>time left</span>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MetronomeMain
