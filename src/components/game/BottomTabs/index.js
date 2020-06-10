import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const BottomTabs = ({ left, right }) => {
  return (
    <Box
      id="bottom-tabs"
      direction="row"
      align="center"
      justify="between"
      fill="horizontal">
      {left}
      {right}
    </Box>
  )
}

export default BottomTabs