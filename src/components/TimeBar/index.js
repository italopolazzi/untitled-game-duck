import React, { useState, useEffect } from 'react'

import { Box, Button, Text } from 'grommet'

import { connect } from 'react-redux'

import * as GameActions from "@store/actions/game";

const TimeBar = ({ decrementNeeds }) => {
  const DAY_SECONDS = 86800
  const [current_speed, setCurrentSpeed] = useState(1)
  const [day_time, setDayTime] = useState(Math.floor(DAY_SECONDS / 60 / current_speed))

  const decrementer = () => {
    if (current_speed > 0 && current_speed <= 3) {
      const new_day_time = day_time + current_speed
      setDayTime(new_day_time)
    }
  }

  const timeout = setTimeout(() => {
    decrementer()
    decrementNeeds(current_speed)
  }, 1000);

  return (
    <Box direction="row" align="center" justify="center">
      
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(0)} label="Pause" />
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(1)} label="1" />
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(2)} label="2" />
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(3)} label="3" />

      <Box direction="column" pad="small" border={{ size: 'small', color: 'accent-1' }}>
        <Text weight="bold">Current Speed: {current_speed}</Text>
        <Text weight="bold">{day_time}</Text>
      </Box>

    </Box>
  )
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  decrementNeeds: current_speed => dispatch(GameActions.decrementNeeds(current_speed))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeBar)