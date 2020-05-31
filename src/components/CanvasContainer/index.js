import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import { connect } from 'react-redux'



import { Text } from 'grommet'
import * as GameActions from '@store/actions/game'

const CanvasContainer = ({ current_animation, updateGame }) => {

  useEffect(() => {
    let req = null
    const animate = () => {
      updateGame()
      req = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(req)
  }, [])


  const currentAnimation = () => {
    if (current_animation) {
      const defaultOptions = {
        assetsPath: `./public/images/duck-${current_animation.type}/`,
        loop: true,
        autoplay: true,
        // animationData: current_animation.default,
        animationData: current_animation,
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
      return <Text weight="bold"> no current_animation</Text>
    }
  }

  return currentAnimation()
}

const mapStateToProps = state => ({
  current_animation: state.game.current_animation
})

const mapDispatchToProps = dispatch => ({
  updateGame: () => dispatch(GameActions.updateGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer)