import React from 'react'
import { Box, Button } from 'grommet'
import Icon from '@mdi/react'
import { mdiPause, mdiChevronRight, mdiChevronDoubleRight, mdiChevronTripleRight } from '@mdi/js'
import { connect } from 'react-redux'
import * as GameActions from "@store/actions/game";


const TimeBar = ({ current_speed, setCurrentSpeed }) => {

  const buttons = [
    { label: 'Pause', icon: mdiPause },
    { label: 'Vel 1', icon: mdiChevronRight },
    { label: 'Vel 2', icon: mdiChevronDoubleRight },
    { label: 'Vel 3', icon: mdiChevronTripleRight },
  ]

  return (
    <Box fill direction="row" align="center" justify="center">
      {buttons.map((button, button_index) => {
        return (
          <Button
            key={button_index}
            margin="xsmall"
            title={button.label}
            onClick={() => setCurrentSpeed(button_index)}
            icon={<Icon path={button.icon} size={1} />}
          />
        )
      })}
    </Box >
  )
}

const mapStateToProps = state => ({
  current_speed: state.game.current_speed
})

const mapDispatchToProps = dispatch => ({
  setCurrentSpeed: current_speed => dispatch(GameActions.setCurrentSpeed(current_speed))
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeBar)