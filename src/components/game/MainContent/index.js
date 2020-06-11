import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const MainContent = ({ top, bottom }) => {
  return (
    <Box
      id="main-content"
      direction="column"
      align="center"
      justify="between"
      fill>
      {top}
      {bottom}
    </Box>
  )
}

export default MainContent