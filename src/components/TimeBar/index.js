import React, { useState, useEffect } from 'react'

import { Box, Button, Text } from 'grommet'

import { connect } from 'react-redux'

import * as GameActions from "@store/actions/game";


const TimeBar = ({ current_speed, setCurrentSpeed }) => {
  return (
    <Box direction="row" align="center" justify="center">

      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(0)} label="Pause" />
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(1)} label="1" />
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(2)} label="2" />
      <Button pad="small" border={{ size: 'small', color: 'accent-1' }} onClick={() => setCurrentSpeed(3)} label="3" />

      <Box direction="column" pad="small" border={{ size: 'small', color: 'accent-1' }}>
        <Text weight="bold">Current Speed: {current_speed}</Text>
        {/* <Text weight="bold">{day_time}</Text> */}
      </Box>

    </Box>
  )
}

const mapStateToProps = state => ({
  current_speed: state.game.current_speed
})

const mapDispatchToProps = dispatch => ({
  setCurrentSpeed: current_speed => dispatch(GameActions.setCurrentSpeed(current_speed))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeBar)