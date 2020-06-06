import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { Text } from 'grommet'
import * as GameActions from '@store/actions/game'

const GameRunner = ({ updateGame, game_state }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      updateGame(game_state)
    }, 1000);
    return () => clearInterval(interval)

  }, [game_state])


  return <Text weight="bold">{game_state.current_speed}</Text>
}

const mapStateToProps = state => ({ game_state: state.game })

const mapDispatchToProps = dispatch => ({
  updateGame: game_state => dispatch(GameActions.updateGame(game_state))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameRunner)