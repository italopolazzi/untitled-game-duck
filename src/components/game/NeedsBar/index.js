import React from 'react'

import { connect } from 'react-redux'
import { Box, Text, Button } from 'grommet'

import Icon from '@mdi/react'

import ColorfulMeter from '@/components/ColorfulMeter'

import { addAction as ADD_ACTION } from '@/store/actions/game'

import { commands } from '@/data/constants'

const NeedItem = ({ need, icon, callback }) => {

  return (
    <Box
      direction="row"
      justify="start"
      align="start"
      basis="1/2"
      gap="small"
      pad="small"
    >
      <Button
        className="neuromorphic"
        onClick={() => callback()}
        icon={
          <Icon path={icon}
            size={1} />
        }
      />
      <Box direction="column" justify="center" align="start" gap="small">
        <Text weight="bold">{need.title}</Text>
        <ColorfulMeter
          round
          values={[
            { value: need.value }
          ]}
        />
      </Box>

    </Box>
  )
}

const NeedsBar = ({ addAction, needs }) => {

  return (
    <Box
      direction="row"
      justify="start"
      align="start"
      wrap={true}
    >
      {commands.map((command, index) => {
        const need = needs[command.type]
        return (
          <NeedItem
            key={index}
            need={need}
            icon={command.icon}
            callback={() => addAction(command)}
          />
        )
      })}
    </Box>
  )
}

const mapStateToProps = state => ({
  needs: state.game.needs
})

const mapDispatchToProps = dispatch => ({
  addAction: command => dispatch(ADD_ACTION(command))
})

export default connect(mapStateToProps, mapDispatchToProps)(NeedsBar)