import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { connect } from 'react-redux'
import { Box, Text } from 'grommet'

import animations from '@/animations'
import './style.sass'


const AnimationContainer = ({ actions }) => {
  const [animation, setAnimation] = useState()

  useEffect(() => {
    const current_action = actions[0]
    if (current_action) {
      const type = current_action.type
      setAnimation({ type, ...animations[type] })
    }

  }, [actions[0]])

  const currentAnimation = () => {
    const defaultOptions = {
      assetsPath: `./public/images/duck-${animation.type}/`,
      loop: true,
      autoplay: true,
      // animationData: animation.default,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        // progressiveLoad: true
      }
    };

    return (
      <Lottie
        isStopped={false}
        isPaused={false}
        options={defaultOptions} />
    )
  }

  return <Box fill={true} className="animation-display">
    {animation && currentAnimation() || <Text weight="bold">NO_ANIMATION</Text>}
  </Box>
}

const mapStateToProps = state => ({
  actions: state.game.actions
})

export default connect(mapStateToProps)(AnimationContainer)