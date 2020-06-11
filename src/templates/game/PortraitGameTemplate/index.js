import React from 'react'
import { Box, Tabs, Tab } from 'grommet'

import './style.sass'

import TopBar from '@/components/game/TopBar'
import MainContent from '@/components/game/MainContent'
import BottomTabs from '@/components/game/BottomTabs'

import MoodBar from '@/components/game/MoodBar'
import OptionsButton from '@/components/game/OptionsButton'

import AnimationContainer from '@/components/game/AnimationContainer'
import ActionsBar from '@/components/game/ActionsBar'

import NeedsBar from '@/components/game/NeedsBar'

const PortraitGameTemplate = props => {


  return (
    <div id="portrait-game-template" >
      <TopBar
        left={<MoodBar />}
        right={<OptionsButton />}
      />
      <MainContent
        top={<AnimationContainer />}
        bottom={<ActionsBar />}
      />
      <BottomTabs
        components={[
          { title: 'NeedsBar', component: NeedsBar }
        ]}
      />

    </div>
  )
}

export default PortraitGameTemplate