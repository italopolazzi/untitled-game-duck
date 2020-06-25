import React, { } from 'react'

import { connect } from 'react-redux'
import { Box, Text, Paragraph, Button } from 'grommet'

import Emoji from '@/components/Emoji'

import "./style.sass"

import { useMediaQuery } from 'react-responsive'


const MoodMenu = ({ closeButton, meter, mood_mods, lifes }) => {
  // const cols = useMediaQuery({ orientation: 'portrait' }) ? 6 : 3
  return (
    <Box id="mood-menu" direction="column" width={{ min: '300px', max: '600px' }} justify="start" align="start" gap="medium" pad="medium" background="brand">
      {/* ini HEADER */}
      <Box direction="row" justify="start" align="center" gap="medium">
        {closeButton}
        {meter}
        <Text weight="bold">Healthy and mood</Text>
      </Box>
      {/* end HEADER */}
      <Box direction="row" justify="start" align="stretch" background="brand" wrap>

        {/* ini LIFES */}
        <Box className="neuromorphic" direction="column" align="start" justify="start" gap="small" pad="small" style={{ width: `${100 * 1}%`, height: 'auto' }} fill>
          <Box direction="row" justify="between" align="center" gap="small" fill="horizontal">
            <Text weight="bold" color="neutral-2" size="large">Healthy</Text>
            <Box direction="row" align="center" justify="center">
              {[...Array(3)].map((life, index) => <Emoji key={index} symbol={index + 1 < lifes ? "💔" : "💖"} size={1} />)}
            </Box>
          </Box>
          <Box direction="row" justify="between" align="end" gap="small">
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam. Libero natus neque explicabo recusandae eius quod vel ex corrupti nostrum numquam iste quidem, atque delectus, itaque maxime fugiat dignissimos?</Paragraph>
            <Button className="neuromorphic" label="Heal" />
          </Box>
        </Box>

        {/* end LIFES */}

        {/* ini MOOD MODS */}
        {Object.values(mood_mods).filter(v => !!v).map((mood_mod, index) => {
          return (
            <Box key={index} direction="column" justify="between" align="stretch" gap="small" wrap style={{ width: `${100 * 6 / 12}%`, height: 'auto' }} pad="medium" margin="small" className="neuromorphic" fill>

              <Box direction="row" justify="between" align="start" gap="small">
                <Text weight="bold" color="neutral-2" size="large">{mood_mod.label}</Text>
                <Emoji symbol={mood_mod.emoji} size={1} />
              </Box>
              <Box direction="row" justify="start" align="start" gap="small" margin={{ vertical: 'medium' }}>
                {mood_mod.description}
              </Box>
              <Box direction="row" justify="between" align="start" gap="small" margin={{ vertical: "small" }}>
                <Box direction="column" justify="start" align="start">
                  <Text weight="bold" color="neutral-2" size="small">Duration</Text>
                  <Text weight="bold">{mood_mod.timeout / 1000}s</Text>
                </Box>
                <Box direction="column" justify="start" align="start">
                  <Text weight="bold" color="neutral-2" size="small">Mod</Text>
                  <Text weight="bold">{mood_mod.value}</Text>
                </Box>
              </Box>

            </Box>
          )
        })}
        {/* end MOOD MODS */}
      </Box>
    </Box>
  )
}


const mapStateToProps = (state, ownProps) => ({
  mood_mods: state.game.mood.mods,
  lifes: state.game.lifes,
  ...ownProps
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MoodMenu)