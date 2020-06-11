import React from 'react'
import { Box, Tabs, Tab } from 'grommet'

import './style.sass'

import TopBar from '@/components/game/TopBar'
import MainContent from '@/components/game/MainContent'
import SideBar from '@/components/game/SideBar'

import MoodBar from '@/components/game/MoodBar'
import OptionsButton from '@/components/game/OptionsButton'

import AnimationContainer from '@/components/game/AnimationContainer'
import ActionsBar from '@/components/game/ActionsBar'

const LandscapeGameTemplate = props => {


  return (
    <div id="landscape-game-template" >
      <TopBar
        left={<MoodBar />}
        right={<OptionsButton />}
      />
      <MainContent
        top={<AnimationContainer />}
        bottom={<ActionsBar />}
      />
      <SideBar
        left={<p>left</p>}
        right={<p>right</p>}
      />

    </div>
  )
}

export default LandscapeGameTemplate