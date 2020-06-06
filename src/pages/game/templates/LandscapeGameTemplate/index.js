import React from 'react'

import './style.sass'

const SideBar = ({ children }) => {
  return (
    <div className="side-bar">
      {children}
    </div>
  )
}

const AnimationContainer = ({ children }) => {
  return (
    <div className="animation-container">
      {children}
    </div>
  )
}

const NeedsBar = ({ children }) => {
  return (
    <div className="needs-bar">
      {children}
    </div>
  )
}

const TimeBar = ({ children }) => {
  return (
    <div className="time-bar">
      {children}
    </div>
  )
}

const MoodModsBar = ({ children }) => {
  return (
    <div className="mood-mods-bar">
      {children}
    </div>
  )
}

const LandscapeGameTemplate = props => {
  const {
    actionsBar,
    moodBar,
    needsBar,
    timeBar,
    animationContainer,
    moodModsBar } = props

    

  return (
    <div className="landscape-game-template" >
      <SideBar>
        {actionsBar}
        {moodBar}
      </SideBar>

      <AnimationContainer>
        {animationContainer}
      </AnimationContainer>

      <NeedsBar>
        {needsBar}
      </NeedsBar>

      <TimeBar>
        {timeBar}
      </TimeBar>

      <MoodModsBar>
        {moodModsBar}
      </MoodModsBar>

    </div>
  )
}

export default LandscapeGameTemplate