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
    title: "baddler",
    icon: BADDLER_ICON,
    value: 90,
  },
  fun: {
    title: "fun",
    icon: FUN_ICON,
    value: 90,
  },
  hunger: {
    title: "hunger",
    icon: HUNGER_ICON,
    value: 90,
  },
  social: {
    title: "social",
    icon: SOCIAL_ICON,
    value: 50,
  },
  energy: {
    title: "energy",
    icon: ENERGY_ICON,
    value: 10,
  },
  hygiene: {
    title: "hygiene",
    icon: HYGIENE_ICON,
    value: 10,
  }
}

const state = {
  global_messages: [],
  commands: [...commands],
  current_speed: 1,
  needs: { ...needs },
  actions: [],
  lifes: 2,
  mood: {
    value: 10,
    label: 'unhappy',
    mods: {
      sad: {
        value: -10,
        timeout: 10000,
        emoji: '😥',
        label: 'sad',
        description: 'Duck is sad'
      },
      happy: {
        value: 10,
        timeout: 10000,
        emoji: '😄',
        label: 'happy',
        description: 'Duck is happy'
      },
      proud: {
        value: 15,
        timeout: 10000,
        emoji: '😊',
        label: 'proud',
        description: 'Duck is proud'
      },
      loved: {
        value: 30,
        timeout: 10000,
        emoji: '🥰',
        label: 'loved',
        description: 'Duck is loved'
      },
      playful: {
        value: 25,
        timeout: 10000,
        emoji: '🤪',
        label: 'playful',
        description: 'Duck is playful'
      },
      upset: {
        value: -25,
        timeout: 10000,
        emoji: '😔',
        label: 'upset',
        description: 'Duck is upset'
      }
    }
  }
}

export default state