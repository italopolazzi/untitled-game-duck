import React from 'react'
import Lottie from 'react-lottie'
import { connect } from 'react-redux'

import * as animationData from '@/animations/duck-bathing.json'

const CanvasContainer = ({ animation }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  };

  return (
    <Lottie
      isStopped={false}
      isPaused={false}
      // style="{{position: 'absolute', height: '100%', width: '100%'}}"
      options={defaultOptions} />
  )
}

export default connect(state => ({
  animation: state.game.animation
}))(CanvasContainer)