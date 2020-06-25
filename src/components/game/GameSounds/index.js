import React, { useRef, useEffect } from 'react'

let bubble_pop_in = null
let bubble_pop_out = null
let quack = null
let notification = null

const playBubblePopIn = () => {
  bubble_pop_in.current.play()
}
const playBubblePopOut = () => {
  bubble_pop_out.current.play()
}
const playQuack = () => {
  quack.current.play()
}
const playNotification = () => {
  notification.current.play()
}

const GameSounds = props => {
  bubble_pop_in = useRef()
  bubble_pop_out = useRef()
  quack = useRef()
  notification = useRef()

  const handleClick = event => {
    const { target } = event
    const element = target.closest("button")

    if (element.tagName === "BUTTON") {
      const { sound } = element.dataset
      switch (sound) {
        case "quack":
          playQuack()
          break;
        case "notification":
          playNotification()
          break;
        case "out":
          playBubblePopOut()
          break;
        default:
          playBubblePopIn()
          break;
      }

    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  })

  return (
    <>
      <audio ref={bubble_pop_in}>
        <source src="./public/sounds/bubble_pop_in.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={bubble_pop_out}>
        <source src="./public/sounds/bubble_pop_out.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={quack}>
        <source src="./public/sounds/quack.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={notification}>
        <source src="./public/sounds/notification.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}

export {
  playQuack,
  playBubblePopOut,
  playBubblePopIn,
  playNotification
}

export default GameSounds