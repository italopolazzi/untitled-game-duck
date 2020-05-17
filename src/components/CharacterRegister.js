import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { Form, FormField, TextInput, Box, Avatar, Text } from 'grommet'

const CharacterRegister = (props) => {
  const [name, setName] = useState(null)
  const [avatar, setAvatar] = useState({ src: '' })

  const inputName = event => {
    const { value } = event.target
    setName(value)
  }

  return (
    <Fragment>
      <Box>
        <Avatar src={avatar.src} size="10vmin" />
        <Text>{name}</Text>
      </Box>
      <Form background="brand">
        <FormField label="Field label" >
          <TextInput placeholder="type here" onChange={inputName} />
        </FormField>
        <FormField label="yout avatar url">
          <TextInput placeholder="url here" onChange={event => setAvatar({ src: event.target.value })} />
        </FormField>

      </Form>
    </Fragment>
  )
}

export default CharacterRegister