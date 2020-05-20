const animate = (context, component) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  context.fillStyle = component.backgroundColor
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)

  // draw circle
  context.beginPath()
  context.arc(component.x, component.y, component.radius, 0, Math.PI * 2, false)
  context.fillStyle = component.circleColor
  context.fill()

  component.x += component.vel
  if (component.x > context.canvas.width + component.radius / 2) {
    component.x = -component.radius
  }

  const next_frame = animate.bind(null, context, component)
  requestAnimationFrame(next_frame)
}


export default animate