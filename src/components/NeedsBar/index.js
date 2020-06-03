import React, { useRef } from 'react'
import { Box, Meter, Button, Text } from 'grommet'

import Icon from '@mdi/react'

import { connect } from 'react-redux'

import * as GameActions from '@store/actions/game'

import './style.sass'

// import quack from '@/sounds/quack.mp3'

const NeedsBar = ({ needs, commands, addAction }) => {

  const audio = useRef()
  const handleAddAction = command => {
    audio.current.play()
    addAction(command)
  }

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
              
              <audio ref={audio}>
                <source src="./public/sounds/bubble_pop.mp3" type="audio/mp3" />
              </audio>

              {/* <Box direction="row" ><Text weight="bold" margin={{ horizontal: 'small' }}>{key}</Text></Box> */}
              <Button className="need-action" icon={<Icon path={command.icon} size={1} />} title={key} onClick={() => handleAddAction(command)} />
              <Box key={key} direction="column" align="start" justify="between">
                <Text weight="bold">{key}</Text>
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