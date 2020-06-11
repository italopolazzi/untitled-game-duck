import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const SideBar = ({ components }) => {
  return (
    <Box
      id="side-bar"
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

export default SideBar