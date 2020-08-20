import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Paragraph, Heading, Box, Main, Layer, List } from 'grommet'
import { useMediaQuery } from 'react-responsive'

import store from '@/store'
import { showInfoLayer as SHOW_INFO_LAYER } from '@/store/actions/start_game'
import { loadSavedGame as LOAD_SAVED_GAME, addGlobalMessage as ADD_GLOBAL_MESSAGE } from '@/store/actions/game'

const HomePage = () => {
  const history = useHistory()
  const isPortrait = useMediaQuery({ orientation: "portrait" })
  const [loadGameLayer, setLoadGameLayer] = useState(false)

  const listSavedGames = () => {
    try {
      const storage_game_item = localStorage.getItem("untitled-game-duck")

      if (storage_game_item) {
        const saved_games = JSON.parse(storage_game_item)
<<<<<<< HEAD
        
        const items = Object.keys(saved_games).map(key => {
          
          const datum = JSON.parse(saved_games[key])
          return { key, ...datum }
        })
        
=======

        const items = Object.keys(saved_games).map(key => {

          const datum = JSON.parse(saved_games[key])
          return { key, ...datum }
        })

>>>>>>> development
        return items
      } else {
        return []
      }
    } catch (error) {
      store.dispatch(ADD_GLOBAL_MESSAGE(error.message))
    }
  }

  const main_style = {
    height: "100vh",
    background: "linear-gradient(45deg, #8D07F6, rgb(218 0 255 / 32%)), url(./public/background.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return (
    <Main pad="large" background="brand" fill style={main_style}  >
      <Box direction="column" justify={isPortrait ? "end" : "center"} align="start" gap="medium" fill>
        <Box direction="column" gap="small">
          <Heading>UntitledGameDuck</Heading>
          <Paragraph>This is a simple life simulation game inspired by The Sims, Tamagotchi and Pou. It was developed with React, Redux, Grommet, Styled Components, Lottie and After Effects as part of self-taught studies.</Paragraph>
          <Button color="accent-1" label="Details, rules and more" plain onClick={() => store.dispatch(SHOW_INFO_LAYER(true))} />
        </Box>
        <Box direction="row" gap="small">
          <Button label="Start game" onClick={() => history.push("/game")} />
          <Button label="Load game" onClick={() => setLoadGameLayer(true)} />
          {loadGameLayer && <Layer
            onClickOutside={() => setLoadGameLayer(false)}
            onEsc={() => setLoadGameLayer(false)}
          >
            <Box pad="medium">
              <Heading>Load game</Heading>
              <List
                primaryKey="key"
                // secondaryKey="date"
                step={5}
<<<<<<< HEAD
                onClickItem={async ({item}) => {                  
=======
                onClickItem={async ({ item }) => {
>>>>>>> development
                  const result = await store.dispatch(LOAD_SAVED_GAME(item))
                  if (result) history.push('/game')
                }}
                data={listSavedGames()}
              />
            </Box>
          </Layer>}
        </Box>
        {/* <CharacterRegister /> */}
      </Box>
    </Main>
  )
}

export default HomePage