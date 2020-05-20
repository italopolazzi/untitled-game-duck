import React, { Fragment, useEffect, useRef } from 'react'

import animate from './animate'


const CanvasContainer = ({ text, animation }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      const radius = 50
      const circle = {
        radius,
        x: -radius,
        y: radius / 2,
        vel: 1,
        circleColor: "yellow",
        backgroundColor: "blue"
      }
      animate(context, circle)
    }
  }, [])


  return (
    <Fragment>
      {/* <canvas ref={canvasRef} width={640} height={400}></canvas> */}
      {text}
    </ Fragment>
  )
}

export default CanvasContainer