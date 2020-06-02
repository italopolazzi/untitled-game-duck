import { mdiShower, mdiGamepadVariantOutline, mdiAccountGroupOutline, mdiFoodAppleOutline, mdiPaperRollOutline, mdiSleep } from '@mdi/js'

const commands = [
  {
    type: 'baddler',
    icon: mdiPaperRollOutline,
    mods: ['pooping', 'nothing', 'eating']
  },
  {
    type: 'fun',
    icon: mdiGamepadVariantOutline,
    mods: ['playing']
  },
  {
    type: 'hunger',
    icon: mdiFoodAppleOutline,
    mods: ['eating']
  },
  {
    type: 'social',
    icon: mdiAccountGroupOutline,
    mods: ['talking']
  },
  {
    type: 'energy',
    icon: mdiSleep,
    mods: ['sleeping']
  },
  {
    type: 'hygiene',
    icon: mdiShower,
    mods: ['bathing']
  }
]

const needs = {
  baddler: {
    icon: mdiPaperRollOutline,
    value: 100,
  },
  fun: {
    icon: mdiGamepadVariantOutline,
    value: 100,
  },
  hunger: {
    icon: mdiFoodAppleOutline,
    value: 100,
  },
  social: {
    icon: mdiAccountGroupOutline,
    value: 100,
  },
  energy: {
    icon: mdiSleep,
    value: 100,
  },
  hygiene: {
    icon: mdiShower,
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
  current_animation: null,
  current_speed: 1
}

export default state