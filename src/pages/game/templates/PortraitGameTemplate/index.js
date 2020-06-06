import React from 'react'

import AnimationContainer from '@components/AnimationContainer'
import MoodBar from '@components/MoodBar'
import MoodModsBar from '@components/MoodModsBar'
import ActionsBar from '@components/ActionsBar'
import NeedsBar from '@components/NeedsBar'
import TimeBar from '@components/TimeBar'
import MainMenu from '@components/MainMenu'

import { Box, Tabs, Tab } from 'grommet'


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

const BottomTabs = ({ tabs }) => {
  return (
    <div className="bottom-tabs">
      <Tabs>
        {tabs.map((tab, tab_index) => {
          return (
            <Tab key={tab_index} title={tab.title}>
              <tab.component />
            </Tab>
          )
        })}
      </Tabs>
    </div>
  )
}

const PortraitGameTemplate = props => {

  const bottom_tabs = [
    { component: TimeBar, title: "Time" },
    { component: MoodModsBar, title: "Mood mods" },
    { component: NeedsBar, title: "Needs" },
  ]

  const left = <MoodBar />

  const center = (
    <ActionsBar
      flex={{ direction: "row", justify: "end", align: "start" }}
    />
  )

  const right = <MainMenu />

  return (
    <div className="portrait-game-template" >
      <TopBar
        left={left}
        center={center}
        right={right} />

      <MainContent>
        {<AnimationContainer />}
      </MainContent>

      <BottomTabs tabs={bottom_tabs} />

    </div>
  )
}

export default PortraitGameTemplate