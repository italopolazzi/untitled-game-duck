import React, { } from 'react'

import { connect } from 'react-redux'
import { Box } from 'grommet'

import Emoji from '@/components/Emoji'

import "./style.sass"

const MoodMenu = ({ meter, mood_mods }) => {
  return (
    <Box
      id="mood-menu"
      direction="column"
      justify="start"
      align="start"
      gap="medium"
      pad="medium"
    >
      <Box
        direction="row"
        justify="start"
        align="center"
        gap="medium"
      >
        {meter}
        Test
      </Box>
      <Box
        direction="row"
        justify="start"
        align="center"
        gap="medium"
      >
        {Object.values(mood_mods).map((mood_mod, index) => {
          return (
            <Box
              direction="column"
              justify="start"
              align="start"
              gap="small"
            >
              <Box
                direction="row"
                justify="between"
                align="start"
                gap="small"
              >
                {mood_mod.label}
                <Emoji symbol={mood_mod.emoji} size={1} />
              </Box>
         )
        })
            </Box>

)
</Box>
</Box>
}

const mapStateToProps = (state, ownProps) => ({
  mood_mods: state.game.mood.mods,
  ...ownProps
})

const mapDispatchToProps = dispatch => ({
  // removeAction: index => dispatch(REMOVE_ACTION(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoodMenu)