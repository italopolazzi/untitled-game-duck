import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const MainContent = ({ left, right }) => {
  return (
    <Box
      id="main-content"
      direction="row"
      align="center"
      justify="between"
      fill="horizontal">
      {left}
      {right}
    </Box>
  )
}

export default MainContent