import React from 'react'
import Lottie from 'react-lottie'
import { connect } from 'react-redux'

import { Text } from 'grommet'

const CanvasContainer = ({ animation }) => {

  const currentAnimation = () => {
    console.log({ animation });

    if (animation) {
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

      return <Lottie
        isStopped={false}
        isPaused={false}
        // style="{{position: 'absolute', height: '100%', width: '100%'}}"
        options={defaultOptions} />
    } else {
      return <Text weight="bold"> no animation</Text>
    }
  }

  return currentAnimation()
}

export default connect(state => ({
  animation: state.game.animation
}))(CanvasContainer)