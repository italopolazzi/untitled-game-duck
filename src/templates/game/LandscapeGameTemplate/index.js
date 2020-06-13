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

import NeedsBar from '@/components/game/NeedsBar'
import TimeBar from '@/components/game/TimeBar'

const LandscapeGameTemplate = props => {


  return (
    <Box id="landscape-game-template" fill >
      <TopBar
        left={<MoodBar />}
        right={<OptionsButton />}
      />
      <MainContent
        top={<AnimationContainer />}
        bottom={<ActionsBar />}
      />
      <SideBar
        components={[
          { title: 'TimeBar', component: TimeBar },
          { title: 'NeedsBar', component: NeedsBar },
        ]}
      />

    </Box>
  )
}

export default LandscapeGameTemplate