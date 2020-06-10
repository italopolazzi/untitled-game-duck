import React from 'react'
import { Box, Tabs, Tab } from 'grommet'

import './style.sass'

import TopBar from '@/components/game/TopBar'
import MainContent from '@/components/game/MainContent'
import BottomTabs from '@/components/game/BottomTabs'

const PortraitGameTemplate = props => {


  return (
    <div className="portrait-game-template" >
      <TopBar
        left={<p>left</p>}
        right={<p>right</p>}
      />
      <MainContent
        left={<p>left</p>}
        right={<p>right</p>}
      />
      <BottomTabs
        left={<p>left</p>}
        right={<p>right</p>}
      />

    </div>
  )
}

export default PortraitGameTemplate