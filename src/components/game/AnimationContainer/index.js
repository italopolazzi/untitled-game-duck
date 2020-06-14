import React from 'react'
import { connect } from 'react-redux'

import Lottie from 'react-lottie'
import { Box } from 'grommet'

import * as animations from '@/animations/index'

console.log(animations);


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
    
    console.log(lottie_options);
    


    
    return (
      <Box fill>
        <Lottie
          options={lottie_options}
          isPaused={false}
          isStopped={false}
        />
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