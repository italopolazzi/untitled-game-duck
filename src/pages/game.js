import React, { Fragment, useEffect, useState } from 'react'

import { map } from 'redux'
import { connect } from 'react-redux'


import { Box, Grid } from 'grommet'

import CanvasContainer from '@components/CanvasContainer'

const ActionsBar = (props) => {

  return (
    <Box direction="row" align="start" justify="start">
      {[...Array(8).keys()].map((b, i) => <Box key={i} background="brand" pad="small" margin={{ horizontal: "small" }} >{i}</Box>)}
    </Box>
  )
}

const ControlBar = (props) => {

  return (
    <Box direction="row" align="start" justify="start">
      {[...Array(8).keys()].map((b, i) => <Box key={i} onClick={() => props.callback(`Clicou no ${i}`)} background="brand" pad="small" margin={{ horizontal: "small" }} >{i}</Box>)}
    </Box>
  )
}


const GamePage = ({ test }) => {
  const [clicked, setClicked] = useState("não clicou ainda")


  return (
    <Fragment>
      <Box direction="column" align="center" justify="center">
        <ActionsBar />
        <CanvasContainer text={clicked} />
        <ControlBar callback={setClicked} />
      </Box>
    </Fragment>
  )
}



export default connect(state => ({ test: state.game.test }))(GamePage)