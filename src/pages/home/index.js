import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Paragraph, Heading, Box, Main } from 'grommet'
import { useMediaQuery } from 'react-responsive'

// import CharacterRegister from '@/components/CharacterRegister'

import store from '@/store'
import { showInfoLayer as SHOW_INFO_LAYER } from '@/store/actions/start_game'

const HomePage = () => {
  const history = useHistory()
  const isPortrait = useMediaQuery({ orientation: "portrait" })

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
          <Button label="Load game" onClick={() => history.push("/game")} />
        </Box>
        {/* <CharacterRegister /> */}
      </Box>
    </Main>
  )
}

export default HomePage