import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { Box, Button, Text, Clock } from 'grommet'

import Icon from '@mdi/react'
import { mdiNumeric1, mdiNumeric2, mdiNumeric3, mdiPause, mdiWeatherSunny } from '@mdi/js'

import { setCurrentSpeed as SET_CURRENT_SPEED } from '@/store/actions/game'

const TimeBar = ({ setCurrentSpeed, current_speed }) => {

  return (
    <Box
      direction="row"
      justify="start"
      align="center"
      style={{
        width: "100%",
        height: "100%"
      }}
      gap="medium"
    >
      <Box
        direction="column"
        justify="center"
        align="center"
      
        style={{
          width: `${100 * 4 / 12}%`
        }}
        fill
      >
        <Icon size={4} path={mdiWeatherSunny} color="var(--accent-1)" />
        <Text weight="bold" >Sunny day</Text>
        <Text style={{
          opacity: "0.6"
        }} >Day | 123</Text>
      </Box>
      <Box
        direction="column"
        justify="center"
        align="center"
        style={{
          width: `${100 * 8 / 12}%`
        }}
        fill
      >
        <Box
          direction="row"
          justify="center"
          align="center"
          fill
          className="neuromorphic-inset"
          round
        >

          <Clock type="digital" precision="minutes" time={new Date(Date.now()).toISOString()} />
        </Box>
        <Box
          direction="row"
          justify="center"
          align="center"
          style={{
            width: `${100 * 8 / 12}%`
          }}
          fill
        >

          <Button
            icon={<Icon path={mdiPause} size={1} />}
            onClick={() => setCurrentSpeed(0)}
          />
          <Button
            icon={<Icon path={mdiNumeric1} size={1} />}
            onClick={() => setCurrentSpeed(1)}
          />
          <Button
            icon={<Icon path={mdiNumeric2} size={1} />}
            onClick={() => setCurrentSpeed(2)}
          />
          <Button
            icon={<Icon path={mdiNumeric3} size={1} />}
            onClick={() => setCurrentSpeed(3)}
          />

        </Box>
      </Box>

    </Box>
  )
}

const mapStateToProps = state => ({
  current_speed: state.game.current_speed
})

const mapDispatchToProps = dispatch => ({
  setCurrentSpeed: speed => dispatch(SET_CURRENT_SPEED(speed))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeBar)