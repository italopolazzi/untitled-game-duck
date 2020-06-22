import React, { useState, useEffect } from 'react'
import { Box, Button, RangeInput, Text } from 'grommet'

import Icon from '@mdi/react'
import { mdiPlus, mdiMinus } from '@mdi/js'

import './style.sass'

const ItemRange = ({ item, callback }) => {
  const [value, setValue] = useState(item.value)

  const number = 4

  const incrementValue = () => { if (value < number) setValue(value + 1) }
  const decrementValue = () => { if (value > -number) setValue(value - 1) }

  useEffect(() => {
    callback(value)
  }, [value])

  return (
    <Box
      direction="column" >
      <Text weight="bold">{item.key}</Text>
      <Text weight="bold">{item.value}</Text>
      <Box
        direction="row"
        align="center"
        justify="center"
        className="neuromorphic-inset">
        <Button
          className="neuromorphic"
          icon={<Icon path={mdiMinus} size={1} />}
          onClick={() => decrementValue()}
        />
        <RangeInput
          min={-number}
          max={number}
          step={1}
          value={value}
          type="number  "
          onChange={event => setValue(parseInt(event.target.value))}
        />
        <Button
          className="neuromorphic"
          icon={<Icon path={mdiPlus} size={1} />}
          onClick={() => incrementValue()}
        />
      </Box>
    </Box>
  )
}

const PersonalitySelector = ({ callback, personality }) => {
  const setPersonalityKeyValue = (key, value) => {
    const new_personality = { ...personality }
    new_personality[key] = value
    callback(new_personality)
  }

  return (
    <Box
      id="landscape-game-template"
      fill
      direction="column" >
      {Object.keys(personality).map(
        (personality_key) => {
          return (
            <ItemRange
              key={personality_key}
              item={{ key: personality_key, value: personality[personality_key] }}
              callback={value => setPersonalityKeyValue(personality_key, value)}
            />
          )
        }
      )}
    </Box>
  )
}

export default PersonalitySelector