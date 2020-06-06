import {
  mdiShower as HYGIENE_ICON,
  mdiGamepadVariantOutline as FUN_ICON,
  mdiAccountGroupOutline as SOCIAL_ICON,
  mdiFoodAppleOutline as HUNGER_ICON,
  mdiPaperRollOutline as BADDLER_ICON,
  mdiSleep as ENERGY_ICON
} from '@mdi/js'

// '/ 1000' is just for dev purposes

const baddler = Object.freeze({
  type: 'baddler',
  icon: BADDLER_ICON,
  action_mods: ['pooping', 'doing_nothing', 'eating'],
  duration: 15000
})

const fun = Object.freeze({
  type: 'fun',
  icon: FUN_ICON,
  action_mods: ['playing'],
  duration: 120000
})

const hunger = Object.freeze({
  type: 'hunger',
  icon: HUNGER_ICON,
  action_mods: ['eating'],
  duration: 15000
})

const social = Object.freeze({
  type: 'social',
  icon: SOCIAL_ICON,
  action_mods: ['talking'],
  duration: 15000
})

const energy = Object.freeze({
  type: 'energy',
  icon: ENERGY_ICON,
  action_mods: ['sleeping'],
  duration: 480000
})

const hygiene = Object.freeze({
  type: 'hygiene',
  icon: HYGIENE_ICON,
  action_mods: ['bathing'],
  duration: 20000
})

const commands = [
  baddler,
  fun,
  hunger,
  social,
  energy,
  hygiene
]

const needs = {
  baddler: {
    icon: BADDLER_ICON,
    value: 90,
  },
  fun: {
    icon: FUN_ICON,
    value: 90,
  },
  hunger: {
    icon: HUNGER_ICON,
    value: 90,
  },
  social: {
    icon: SOCIAL_ICON,
    value: 50,
  },
  energy: {
    icon: ENERGY_ICON,
    value: 10,
  },
  hygiene: {
    icon: HYGIENE_ICON,
    value: 10,
  }
}

const state = {
  // available
  commands: [...commands],
  // game
  current_speed: 1,
  // character
  needs: { ...needs },
  actions: [],
  mood: {
    value: 10,
    label: 'unhappy',
    mods: {}
  }
}

export default state