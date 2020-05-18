import React, { Fragment, Component } from 'react'
import { useState, useEffect } from 'react'

import { Form, FormField, TextInput, Grid, Box, Avatar, Text, Button } from 'grommet'

import { Checkmark, Add, Subtract } from 'grommet-icons'

const CharacterRegister = (props) => {
  const [name, setName] = useState(null)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [personalityTraitsPoints, setPersonalityTraitsPoints] = useState(0)

  const inputName = event => {
    const { value } = event.target
    setName(value)
  }

  useEffect(() => {

    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=2')
      const json = await response.json()
      const { results } = json
      const items = results.map(item => {
        item.personality = {
          neat: 5,
          outgoing: 5,
          active: 5,
          playful: 5,
          nice: 5
        }
        return item
      })
      setUsers(items)
    }

    if (!users.length) {
      fetchUsers()
    }
  }, [])

  const UserBox = ({ user, callback, children, direction = 'column' }) => {
    const current = currentUser && user.login.username === currentUser.login.username
    // if (user) {
    return user && (
      <Box align="center" justify="center" pad="medium" gap="xxsmall" direction={direction} background={{ "dark": false }} border={{ "color": "accent-1", "size": "large", "side": "all" }} round="medium">
        <Avatar src={user.picture.thumbnail} size="10vmin" />
        <Text size="xlarge" weight="bold" textAlign="center">{user.name.first}</Text>
        <Text size="large" margin={{ "bottom": "medium" }}>{user.name.last}</Text>
        <Button label={current ? "current" : "use"} onClick={callback} icon={!current && <Checkmark />} active={false} disabled={current} hoverIndicator={false} plain={false} primary={false} reverse={false} secondary={false} type="button" />
        {children}
      </Box>
    )
    // }
  }

  const UsersList = ({ users }) => {
    return users.map(user => {
      const current = currentUser && user.login.username === currentUser.login.username
      return !current && (
        <UserBox key={user.login.username} callback={() => setCurrentUser(user)} user={user} />
      )
    })
  }

  const PointsRangeSelector = ({ label, value }) => {
    return (
      <FormField label={label} required>
        <Box align="center" justify="center" direction="row" pad="small">
          <Button label="Subtract" secondary={false} reverse={false} type="button" plain={false} hoverIndicator={false} disabled={false} icon={<Subtract />} active={false} primary={false} />
          <Text margin={{ "horizontal": "medium" }} size="xxlarge" textAlign="center" weight="bold" >{value}</Text>
          <Button label="Add" secondary={false} reverse={false} type="button" plain={false} hoverIndicator={false} disabled={false} icon={<Add />} active={false} />
        </Box>
      </FormField>
    )
  }


  const PersonalityTraitsPointsRangeSelectors = ({ user }) => {
    return (
      <Fragment>
        <Box>
          <Text size="large" weight="bold">Available: </Text>{personalityTraitsPoints}
        </Box>

        {Object.keys(user.personality).map(key => <PointsRangeSelector label={key} value={user.personality[key]} />)}

      </Fragment>
    )
  }

  const CurrentUser = ({ user }) => {
    return (
      <UserBox user={user} >
        <PersonalityTraitsPointsRangeSelectors user={user} />
      </UserBox>
    )
  }

  return (
    <Fragment>
      {/* <Form background="brand">
        <FormField label="Field label" >
          <TextInput placeholder="type here" onChange={inputName} />
        </FormField>
      </Form> */}
      <CurrentUser user={currentUser} />
      <Grid columns="small" gap="xxsmall">
        <UsersList users={users} />
      </Grid>
    </Fragment>
  )
}

export default CharacterRegister