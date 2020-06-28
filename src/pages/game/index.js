import React from 'react'
import { Main, Box, Paragraph, Heading, Button } from 'grommet'
import GlobalMessages from "@/components/GlobalMessages/index"



import GameRunner from '@/components/game/GameRunner'
import GameSounds from '@/components/game/GameSounds'
import PortraitGameTemplate from '@/templates/game/PortraitGameTemplate'
import LandscapeGameTemplate from '@/templates/game/LandscapeGameTemplate'
import { useMediaQuery } from 'react-responsive'

import './style.sass'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'


import Icon from '@mdi/react'
import { mdiDuck, mdiSkull } from '@mdi/js'

const Game = ({ status }) => {
  const history = useHistory()
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  if (status === "DEAD") {
    return (
      <Box direction="column" pad="large">
        <Heading>Oh no! </Heading>
        <Paragraph>
          Duck is dead, you can do nothing now!
          <Icon path={mdiDuck} size={1} />
          <Icon path={mdiSkull} size={1} />
        </Paragraph>

        <Button onClick={() => history.push("/")}>Back to main menu</Button>
      </Box>
    )
  } else {
    return (
      <>
        <div id="game-runner"><GameRunner /></div>
        <div id="game-sounds"><GameSounds /></div>
        <div id="game-template" >
          {isPortrait ? <PortraitGameTemplate /> : <LandscapeGameTemplate />}
        </div>
      </>
    )
  }
}

const GamePage = ({ status }) => {
  return (
    <div id="game-container">
      {/* navigation */}
      <GlobalMessages />
      <section id="game">
        <Main pad="false" background="brand" >
          <Game status={status} />
        </Main>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  status: state.game.status
})

export default connect(mapStateToProps)(GamePage)