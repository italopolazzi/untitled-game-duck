import React from 'react'
import { connect } from 'react-redux'

import Lottie from 'react-lottie'
import { Box, Button } from 'grommet'

import * as animations from '@/animations/index'


const AnimationContainer = ({ current_action }) => {

  if (current_action && current_action.type) {
    const { type } = current_action

    const lottie_options = {
      assetsPath: `./public/images/duck-${type}/`,
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
  } else {
    return <p>No Animation</p>
  }
}

const mapStateToProps = state => ({
  current_action: state.game.actions[0]
})

export default connect(mapStateToProps)(AnimationContainer)