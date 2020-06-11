import React from 'react'
import { Box, Button, Image } from 'grommet'

import { connect } from 'react-redux'


import './style.sass'

import ColorfulMeter from '@/components/ColorfulMeter'

const MoodMeter = ({ mood }) => {
  return (
    <Button
      className="neuromorphic-inset"
      style={{ padding: 0 }}
      icon={
        <Box
          id="mood-bar"
          direction="row"
          align="center"
          justify="center"
          height="4rem"
          width="4rem"
          overflow="hidden"
          pad="small"
        >
          <ColorfulMeter
            id="mood-value"
            values={[{ value: mood.value }]}
            round
            type="circle"
            thickness="large"
          />
          <Box id="mood-icon-container" >
            <Image
              fit="cover"
              src="./public/images/duck-faces/duck-very-happy.svg"
            />
          </Box>
        </Box>
      }
    />
  )
}

const mapStateToProps = state => ({
  mood: state.game.mood
})

export default connect(mapStateToProps)(MoodMeter)