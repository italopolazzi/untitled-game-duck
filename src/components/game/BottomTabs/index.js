import React from 'react'
import { Box, Tabs, Tab } from 'grommet'

import './style.sass'

const BottomTabs = ({ components }) => {
  return (
    <Box
      id="bottom-tabs"
      direction="column"
      align="center"
      justify="start"
      fill="horizontal"
      height="medium"
      className="neuromorphic"
    >
      <Tabs  justify="start" style={{ width: '100%' }}>
        {components.map((tab, index) => {
          return (
            <Tab margin="small" key={index} title={tab.title}>
              <Box
                pad="large"
                margin={{ bottom: "small" }}
                fill
              >
                <tab.component />
              </Box>
            </Tab>
          )
        })}

      </Tabs>
    </Box>
  )
}

export default BottomTabs