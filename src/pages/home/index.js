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
        
        const items = Object.keys(saved_games).map(key => {
          
          const datum = JSON.parse(saved_games[key])
          return { key, ...datum }
        })
        
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
    // backgroundImage: `linear-gradient(${isPortrait ? 'to top' : '45deg'}, var(--brand), transparent), url('./public/images/duck-animations-paint.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return (
    <Main pad="large" background="brand" fill style={main_style}  >
      <Box direction="column" justify={isPortrait ? "end" : "center"} align="start" gap="medium" fill>
        <Box direction="column" gap="small">
          <Heading>UntitledGameDuck</Heading>
          <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore a facilis asperiores id, quae reprehenderit omnis quo, iste consequuntur porro eaque nesciunt maxime sunt quod, ea enim debitis eveniet dolorem!</Paragraph>
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
                onClickItem={async ({item}) => {                  
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