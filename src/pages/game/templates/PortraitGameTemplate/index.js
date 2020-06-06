import React from 'react'

import AnimationContainer from '@components/AnimationContainer'
import MoodBar from '@components/MoodBar'
import MoodModsBar from '@components/MoodModsBar'
import ActionsBar from '@components/ActionsBar'
import NeedsBar from '@components/NeedsBar'
import TimeBar from '@components/TimeBar'
import MainMenu from '@components/MainMenu'

import { Box } from 'grommet'


import './style.sass'

const TopBar = ({ left, center, right }) => {
  return (
    <Box className="top-bar" direction="row" align="start" justify="between">
      <div className="top-bar-left">{left}</div>
      <div className="top-bar-center">{center}</div>
      <div className="top-bar-right">{right}</div>
    </Box>
  )
}

const MainContent = ({ children }) => {
  return (
    <div className="main-content">
      {children}
    </div>
  )
}

const FooterBar = ({ children }) => {
  return (
    <div className="footer-bar">
      {children}
    </div>
  )
}

const BottomTabs = ({ children }) => {
  return (
    <div className="bottom-tabs">
      {children}
    </div>
  )
}

const PortraitGameTemplate = props => {


  return (
    <div className="portrait-game-template" >
      <TopBar left={<MoodBar />} center={<ActionsBar />} right={<MainMenu />} />

      <MainContent>
        {<AnimationContainer />}
      </MainContent>

      <FooterBar>
        {<NeedsBar />}
      </FooterBar>

      <BottomTabs>
        {<TimeBar />}
        {<MoodModsBar />}
      </BottomTabs>

    </div>
  )
}

export default PortraitGameTemplate