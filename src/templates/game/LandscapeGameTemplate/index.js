import React from 'react'
import { Box, Tabs, Tab } from 'grommet'

import './style.sass'

import TopBar from '@/components/game/TopBar'
import MainContent from '@/components/game/MainContent'
import SideBar from '@/components/game/SideBar'

const LandscapeGameTemplate = props => {


  return (
    <div className="landscape-game-template" >
      <TopBar
        left={<p>left</p>}
        right={<p>right</p>}
      />
      <MainContent
        left={<p>left</p>}
        right={<p>right</p>}
      />
      <SideBar
        left={<p>left</p>}
        right={<p>right</p>}
      />

    </div>
  )
}

export default LandscapeGameTemplate