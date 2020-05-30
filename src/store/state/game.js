import { Restroom, Gamepad, Cafeteria, Trigger, Aed, Group } from 'grommet-icons'

const commands = [
  {
    type: 'baddler',
    icon: Restroom,
    mods: ['pooping', 'nothing', 'eating']
  },
  {
    type: 'fun',
    icon: Gamepad,
    mods: ['playing']
  },
  {
    type: 'hunger',
    icon: Cafeteria,
    mods: ['eating']
  },
  {
    type: 'social',
    icon: Group,
    mods: ['talking']
  },
  {
    type: 'energy',
    icon: Trigger,
    mods: ['sleeping']
  },
  {
    type: 'hygiene',
    icon: Aed,
    mods: ['bathing']
  }
]

const needs = {
  baddler: {
    icon: Restroom,
    value: 100,
  },
  fun: {
    icon: Gamepad,
    value: 100,
  },
  hunger: {
    icon: Cafeteria,
    value: 100,
  },
  social: {
    icon: Group,
    value: 100,
  },
  energy: {
    icon: Trigger,
    value: 100,
  },
  hygiene: {
    icon: Aed,
    value: 100,
  }
}

const mods = {
  nothing: {
    baddler: -1,
    fun: -1,
    hunger: -2,
    social: -1,
    energy: -2,
    hygiene: -1
  },
  eating: {
    baddler: -5,
    fun: 0,
    hunger: 10,
    social: 0,
    energy: 0,
    hygiene: -1
  },
  pooping: {
    baddler: 10,
    fun: 0,
    hunger: -2,
    social: 0,
    energy: -2,
    hygiene: -5
  },
  sleeping: {
    baddler: -2,
    fun: 2,
    hunger: -4,
    social: 0,
    energy: 10,
    hygiene: -1
  },
  bathing: {
    baddler: 0,
    fun: 4,
    hunger: 0,
    social: 0,
    energy: 1,
    hygiene: 10
  },
  talking: {
    baddler: 0,
    fun: 0,
    hunger: -2,
    social: 10,
    energy: -2,
    hygiene: 0
  },
  playing: {
    baddler: 0,
    fun: 10,
    hunger: -2,
    social: 0,
    energy: -4,
    hygiene: -2
  }
}

const state = {
  mods: { ...mods },
  needs: { ...needs },
  commands: [...commands],
  actions: [],
  animation: null
}

export default state