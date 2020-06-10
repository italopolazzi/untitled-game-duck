import React from 'react'
import { Box, Tabs, Tab } from 'grommet'

import './style.sass'

import TopBar from '@/components/game/TopBar'
import MainContent from '@/components/game/MainContent'
import BottomTabs from '@/components/game/BottomTabs'

import MoodBar from '@/components/game/MoodBar'
import OptionsButton from '@/components/game/OptionsButton'

const PortraitGameTemplate = props => {


  return (
    <div id="portrait-game-template" >
      <TopBar
        left={<MoodBar />}
        right={<OptionsButton />}
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