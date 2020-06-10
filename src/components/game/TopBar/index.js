import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const TopBar = ({ left, right }) => {
  return (
    <Box
      id="top-bar"
      direction="row"
      align="center"
      justify="between"
      fill="horizontal"
      gap="small"
      pad="small"
      >
      {left}
      {right}
    </Box>
  )
}

export default TopBar