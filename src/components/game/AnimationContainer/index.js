import React from 'react'
import { connect } from 'react-redux'

import Lottie from 'react-lottie'
import { Box, Button } from 'grommet'

import * as animations from '@/animations/index'


const AnimationContainer = ({ current_action }) => {


  const type = current_action ? current_action.type : "nothing"

  const lottie_options = {
    loop: true,
    autoplay: true,
    animationData: animations[type],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      // progressiveLoad: true
    }
  }


  return (
    <Box fill>
      <Button data-sound="quack" >
        <Lottie

          options={lottie_options}
          isPaused={false}

          isStopped={false}

        />
      </Button>
    </Box>
  )

}

const mapStateToProps = state => ({
  current_action: state.game.actions[0]
})

export default connect(mapStateToProps)(AnimationContainer)