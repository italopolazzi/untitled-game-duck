import React from 'react'
import { Box, Layer, Button, Paragraph, Heading } from 'grommet'
import { connect } from 'react-redux'

import { showInfoLayer as SHOW_INFO_LAYER } from '@/store/actions/start_game'

const Info = ({ info_layer, showInfoLayer }) => {

  return (
    <Box>
      {info_layer && (
        <Layer
          onEsc={() => showInfoLayer(false)}
          onClickOutside={() => showInfoLayer(false)}
          full
          modal
          margin="medium"
        >
          <Box direction="column" pad="large" overflow="auto" gap="medium">
            <Button label="close" onClick={() => showInfoLayer(false)} />
            <Heading>Description</Heading>
            <Paragraph>
              This is a life simulation game based on The Sims, Tamagotchi and Pou. It was developed with React, Redux, Grommet, Styled Components, Lottie and After Effects as part of self-taught studies.
              </Paragraph>

            <Heading>Rules</Heading>
            <ul>
              <li>You will control a virtual pet which is a duck</li> 
              <li>The duck starts with 3 lives</li> 
              <li>Lives decrease if mood drops completely</li> 
              <li>The game ends if lives run out</li> 
              <li>The action queue becomes full with a total of 6 actions added</li> 
              <li>The character's mood changes by modifiers which are added when the needs' levels are to high or too low</li> 
            </ul>
            
          </Box>

        </Layer>
      )}
    </Box>
  )
}

const mapStateToProps = state => ({
  info_layer: state.start_game.info_layer
})

const mapDispatchToProps = dispatch => ({
  showInfoLayer: value => dispatch(SHOW_INFO_LAYER(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Info)