import React from 'react'
import { Text, Box, Meter } from 'grommet'

import { connect } from 'react-redux'

const NeedsBar = ({ needs }) => {
  console.log({ needs });

  const needs_style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    height: '100%',
    width: '100%',
  }
  const al = (key, value) => alert(`${key}: ${value}`)
  return (
    <Box border={{ size: 'small', color: 'brand' }} style={needs_style} pad="small">

      {
        Object.keys(needs).map(need_key => {
          // const { value, icon } = needs[need_key]
          const { value } = needs[need_key]
          return (
            <Box key={need_key} direction="column">
              {/* <Box direction="row" className="need-top"><Cafeteria /><Text weight="bold" margin={{ horizontal: 'small' }}>{need_key}</Text></Box> */}
              <Box direction="row" className="need-top"><Text weight="bold" margin={{ horizontal: 'small' }}>{need_key}</Text></Box>
              {/* <Box direction="row" className="need-bottom">{value}</Box> */}
              <Meter
                round
                className="need-bottom"
                values={[{
                  value,
                  color: value < 20 ? 'red' : 'green',
                  label: need_key,
                  onClick: () => { al(need_key, value) }
                }]}
                aria-label="meter"
              />
            </Box>
          )
        })
      }
    </Box >
  )
}

export default connect(state => ({ needs: state.game.needs }))(NeedsBar)