import { Restroom, Gamepad, Cafeteria, Trigger, Aed, Group } from 'grommet-icons'

const commands = [
  {
    type: 'baddler',
    icon: Restroom
  },
  {
    type: 'fun',
    icon: Gamepad
  },
  {
    type: 'hunger',
    icon: Cafeteria
  },
  {
    type: 'social',
    icon: Group
  },
  {
    type: 'energy',
    icon: Trigger
  },
  {
    type: 'hygiene',
    icon: Aed
  }
]

const needs = {
  baddler: {
    icon: Restroom,
    value: 100
  },
  fun: {
    icon: Gamepad,
    value: 100
  },
  hunger: {
    icon: Cafeteria,
    value: 100
  },
  social: {
    icon: Group,
    value: 100
  },
  energy: {
    icon: Trigger,
    value: 100
  },
  hygiene: {
    icon: Aed,
    value: 100
  }
}

const initialState = {
  needs: { ...needs },
  commands: [...commands],
  actions: [],
  animation: 'Default'
}


const reducer = (state = initialState, action) => {
  const data = state
  switch (action.type) {
    case 'ADD_ACTION':
      if (data.actions.length < 8) {
        data.animation = action.payload.type
        data.actions = [...data.actions, action.payload]
        return { ...data }
      } else {
        return data
      }
    case 'REMOVE_ACTION':
      data.actions = [...data.actions.filter((v, i) => i !== action.payload)]
      return { ...data }
    case 'CHANGE_ANIMATION':
      data.animation = action.payload
      return { ...data }
  }
  return state
}

export default reducer