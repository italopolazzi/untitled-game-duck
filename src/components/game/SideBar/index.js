import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const SideBar = ({ left, right }) => {
  return (
    <Box
      id="side-bar"
      direction="row"
      align="center"
      justify="between"
      fill="horizontal">
      {left}
      {right}
    </Box>
  )
}

export default SideBar