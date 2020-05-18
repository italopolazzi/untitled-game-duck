import React, { Fragment, useReducer } from 'react'
import { useState, useEffect } from 'react'

import { FormField, Grid, Box, Avatar, Text, Button, RangeInput } from 'grommet'

import { Checkmark, Add, Subtract } from 'grommet-icons'

const CharacterRegister = (props) => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  // const [, setPersonalityTraitsPoints] = useState(0)

  const personalityTraitsPoints = user => {
    return Object.values(user.personality).reduce((acc, v) => Math.abs(acc) + Math.abs(v))
  }



  useEffect(() => {

    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=2')
      const json = await response.json()
      const { results } = json
      const items = results.map(item => {
        item.personality = {
          neat: 1,
          outgoing: 4,
          active: 3,
          playful: -3,
          nice: 0
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
    const current = user === users[currentUser]
    // if (user) {
    return user && (
      <Box align="center" justify="center" pad="medium" gap="xxsmall" direction={direction} background={{ "dark": false }} border={{ "color": "Math.abs(acc)entMath.abs(v)1", "size": "large", "side": "all" }} round="medium">
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
    return users.map((user, user_index) => {
      return (
        <UserBox key={user_index} callback={() => setCurrentUser(user_index)} user={user} />
      )
    })
  }


  const setUserPersonalityTraitsPoint = (label, value) => {
    const updatedUsers = users.map((user, user_index) => {
      if (user_index === currentUser) {
        user.personality[label] = value
      }
      return user
    })
    setUsers(updatedUsers)
  }

  const PointsRangeSelector = ({ label, value }) => {
    const n = 5
    const min = -n
    const max = n

    return (
      <FormField label={label} require>
        <Box direction="column" align="center" justify="center">
          <Text weight="bold">{value}</Text>
          <Box align="center" justify="center" direction="row" pad="small">
            <RangeInput max={max} min={min} step={1} value={value} onChange={event => setUserPersonalityTraitsPoint(label, event.target.value)} />
          </Box>
        </Box>
      </FormField>
    )
  }


  const PersonalityTraitsPointsRangeSelectors = ({ user }) => {
    return (
      <Fragment>
        <Box>
          <Text size="large" weight="bold">Available: </Text>{personalityTraitsPoints(user)}
        </Box>

        {Object.keys(user.personality).map(key => <PointsRangeSelector key={key} label={key} value={user.personality[key]} />)}

      </Fragment>
    )
  }

  const CurrentUser = (props) => {
    if (typeof currentUser === 'number' && currentUser >= 0 && currentUser < users.length) {
      const user = users[currentUser]
      return (
        <UserBox user={user} >
          <PersonalityTraitsPointsRangeSelectors user={user} />
        </UserBox>
      )
    }
    return null
  }

  return (
    <Fragment>
      <CurrentUser />
      <Grid columns="small" gap="xxsmall">
        <UsersList users={users} />
      </Grid>
    </Fragment>
  )
}

export default CharacterRegister