import React from 'react'
import { Meter } from 'grommet'

const ColorfulMeter = props => {

  const new_props = { ...props }
  
  const getColor = percent => `rgb(${(255 - percent) * 2.56}, ${percent * 2.56}, 0)`
  
  const { values } = props
  if (values.length) {
    new_props.values = values.reduce((acc, curr) => {
      curr.color = getColor(curr.value)
      return acc.concat(curr)
    }, [])
  }

  return <Meter {...new_props} />

}

export default ColorfulMeter