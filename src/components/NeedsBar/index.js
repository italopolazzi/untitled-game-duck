import React from 'react'
import { Text, Box, Meter, Button } from 'grommet'

import { connect } from 'react-redux'

import * as GameActions from '@store/actions/game'

import './style.sass'

const NeedsBar = ({ needs, commands, addAction }) => {

  const al = (key, value) => alert(`${key}: ${value}`)
  return (
    <Box border={{ size: 'small', color: 'brand' }} className="needs-style" pad="small">

      {
        commands.map(command => {

          const key = command.type
          // const { value, icon } = needs[need_key]
          const { value } = needs[key]
          return (
            <Box key={key} direction="row" align="center" justify="between">
              {/* <Box direction="row" ><Text weight="bold" margin={{ horizontal: 'small' }}>{key}</Text></Box> */}
              <Button className="need-action" icon={<command.icon />} title={key} onClick={() => addAction(command)} />
              <Meter
                round
                className="need-value"
                values={[{
                  value,
                  color: value < 20 ? 'accent-2' : 'accent-1',
                  label: key,
                  onClick: () => { al(key, value) }
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

const mapStateToProps = state => ({
  needs: state.game.needs,
  commands: state.game.commands
})

const mapDispatchToProps = dispatch => ({
  addAction: command => dispatch(GameActions.addAction(command))
})

export default connect(mapStateToProps, mapDispatchToProps)(NeedsBar)