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
            <Heading>Detalhes</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio! Expedita, consectetur? Maxime molestias debitis ducimus culpa nam perspiciatis, aperiam molestiae, amet unde dicta quo expedita sint veniam odio maiores?
              </Paragraph>

            <Heading>Objetivo</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio! Expedita, consectetur? Maxime molestias debitis ducimus culpa nam perspiciatis, aperiam molestiae, amet unde dicta quo expedita sint veniam odio maiores?
              </Paragraph>

            <Heading>Regras</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio! Expedita, consectetur? Maxime molestias debitis ducimus culpa nam perspiciatis, aperiam molestiae, amet unde dicta quo expedita sint veniam odio maiores?
            </Paragraph>

            <Heading>Interface</Heading>
            <Paragraph>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio! Expedita, consectetur? Maxime molestias debitis ducimus culpa nam perspiciatis, aperiam molestiae, amet unde dicta quo expedita sint veniam odio maiores?
            </Paragraph>

            <Heading>Créditos</Heading>
            <Paragraph>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio! Expedita, consectetur? Maxime molestias debitis ducimus culpa nam perspiciatis, aperiam molestiae, amet unde dicta quo expedita sint veniam odio maiores?
            </Paragraph>
            
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