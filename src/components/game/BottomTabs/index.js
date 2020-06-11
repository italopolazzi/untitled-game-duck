import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const BottomTabs = ({ components }) => {
  return (
    <Box
      id="bottom-tabs"
      direction="row"
      align="center"
      justify="between"
      fill="horizontal">
      {components.map((item, index) => {
        return (
          <item.component key={index} />
        )
      })}
    </Box>
  )
}

export default BottomTabs