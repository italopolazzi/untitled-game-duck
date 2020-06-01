import React from 'react'
import { connect } from 'react-redux'

import './style.sass'

import { Avatar, Meter, Box } from 'grommet'
const MoodBar = ({ }) => {



  const src = './public/images/duck-faces/duck-very-happy.svg'
  return (
    <Box className="mood-component" width="64px" height="64px" margin="small" >
      <Meter className="mood-value" round  values={[{ value: 60, color: "brand" }]} type="circle" size="64px" />
      <Avatar className="mood-avatar" size="64px" src={src} />
    </Box>
  )
}


export default connect()(MoodBar)