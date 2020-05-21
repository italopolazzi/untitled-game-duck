import React from 'react'
import { Text, Box } from 'grommet'
import { Restroom, Gamepad, Cafeteria, Trigger, Aed, Group } from 'grommet-icons'

const NeedsBar = (props) => {
  const needs = {
    baddler: {
      icon: Restroom,
      value: 100
    },
    fun: {
      icon: Gamepad,
      value: 100
    },
    hunger: {
      icon: Cafeteria,
      value: 100
    },
    social: {
      icon: Group,
      value: 100
    },
    energy: {
      icon: Trigger,
      value: 100
    },
    hygiene: {
      icon: Aed,
      value: 100
    }
  }

  return (
    <Box border={{ size: 'small', color: 'brand' }} align="start" justify="start">

      {
        Object.keys(needs).map(need_key => {
          const { value, icon } = needs[need_key]
          return (
            <Box key={need_key} direction="column">
              <Box direction="row" className="need-top"><Cafeteria /><Text weight="bold" margin={{ horizontal: 'small' }}>{need_key}</Text></Box>
              <Box direction="row" className="need-bottom">{value}</Box>
            </Box>
          )
        })
      }
    </Box >
  )
}

export default NeedsBar