import React from 'react'
import { Text, Box } from 'grommet'

import { connect } from 'react-redux'

const NeedsBar = ({ needs }) => {
  return (
    <Box border={{ size: 'small', color: 'brand' }} align="start" justify="start">

      {
        Object.keys(needs).map(need_key => {
          // const { value, icon } = needs[need_key]
          const { value } = needs[need_key]
          return (
            <Box key={need_key} direction="column">
              {/* <Box direction="row" className="need-top"><Cafeteria /><Text weight="bold" margin={{ horizontal: 'small' }}>{need_key}</Text></Box> */}
              <Box direction="row" className="need-top"><Text weight="bold" margin={{ horizontal: 'small' }}>{need_key}</Text></Box>
              <Box direction="row" className="need-bottom">{value}</Box>
            </Box>
          )
        })
      }
    </Box >
  )
}

export default connect(state => ({ needs: state.game.needs }))(NeedsBar)