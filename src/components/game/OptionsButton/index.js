import React from 'react'
import { Button, Box } from 'grommet'

import Icon from '@mdi/react'
import { mdiDotsVertical } from '@mdi/js'

import './style.sass'

const OptionsButton = props => {
  return (
    <Button
      id="options-button"
      className="neuromorphic"
      direction="row"
      align="center"
      justify="start"
      icon={<Icon path={mdiDotsVertical} size={1} />}
    />
  )
}

export default OptionsButton