import React from 'react'
import { Box, Text, Stack, Button } from 'grommet'
import { connect } from 'react-redux'
import './style.sass'

import Emoji from '@/components/Emoji'


const LifesCountMini = ({ lifes, button }) => {

  return (
    <Stack anchor="top-right">
      <Button
        {...button}
      >
        <Emoji symbol="🤎" />
      </Button>
      <Box
        background="brand"
        pad={{ horizontal: 'xsmall' }}
        round
      >
        <Text>{lifes}</Text>
      </Box>
    </Stack>

  )
}

const mapStateToProps = state => ({
  lifes: state.game.lifes
})

export default connect(mapStateToProps)(LifesCountMini)