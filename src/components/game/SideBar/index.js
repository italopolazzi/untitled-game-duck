import React from 'react'
import { Box } from 'grommet'

import './style.sass'

const SideBar = ({ components }) => {
  return (
    <Box
      id="side-bar"
      direction="column"
      align="center"
      justify="end"
      fill="horizontal">
      {components.map((item, index) => {
        return (
          <Box
            key={index}
            className="neuromorphic"
            pad="medium"
            margin={{bottom: "small" }}
          >
            <item.component className="" />
          </Box>
        )
      })}
    </Box>
  )
}

export default SideBar