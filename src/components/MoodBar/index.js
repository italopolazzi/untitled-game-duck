import React from 'react'
import { connect } from 'react-redux'

import { Avatar, Box, Button } from 'grommet'
import ColorfulMeter from '@/components/ColorfulMeter/index'
import MoodModsBar from '@/components/MoodModsBar/index'

import './style.sass'

const MoodBar = ({ mood }) => {

  const getMoodLabel = value => {
    if (value <= 20)
      return 'very unhappy'
    else if (value <= 40)
      return 'unhappy'
    else if (value <= 60)
      return 'normal'
    else if (value <= 80)
      return 'happy'
    else
      return 'very happy'
  }

  const src = './public/images/duck-faces/duck-very-happy.svg'
  return (


    <Box
      direction="row"
      align="center"
      justify="start"
      className="neuromorphic"
      pad="none"
      margin="small"
      fill="horizontal"
    >
      <Button
        className="mood-button neuromorphic-inset"
        margin="none"
        title={`Duck is ${getMoodLabel(mood.value)}`}
      >
        <div className="button-content">
          <Avatar
            className="mood-avatar"
            size="4rem"
            src={src} />
          <div className="mood-value">
            <ColorfulMeter

              round
              values={[{ value: mood.value }]}
              type="circle"
              size="small" />
          </div>
        </div>
      </Button>

      <MoodModsBar />
    </Box>

  )
}

const mapStateToProps = state => ({
  mood: state.game.mood
})

export default connect(mapStateToProps)(MoodBar)