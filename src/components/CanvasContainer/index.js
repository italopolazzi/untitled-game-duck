import React, { Fragment } from 'react'
// import React, { Fragment, useEffect, useRef } from 'react'

// import animate from './animate'
import { connect } from 'react-redux'


const CanvasContainer = ({ animation }) => {
  // const canvasRef = useRef(null)

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   if (canvas) {
  //     const context = canvas.getContext('2d')
  //     const radius = 50
  //     const circle = {
  //       radius,
  //       x: -radius,
  //       y: radius / 2,
  //       vel: 1,
  //       circleColor: "yellow",
  //       backgroundColor: "blue"
  //     }
  //     animate(context, circle)
  //   }
  // }, [])


  return (
    <>
      {/* <canvas ref={canvasRef} width={640} height={400}></canvas> */}
      {animation}
    </>
  )
}

export default connect(state => ({
  animation: state.game.animation
}))(CanvasContainer)