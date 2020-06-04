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
  action_mods: ['pooping', 'nothing', 'eating'],
  times: 15000 / 1000
})

const fun = Object.freeze({
  type: 'fun',
  icon: FUN_ICON,
  action_mods: ['playing'],
  times: 120000 / 1000
})

const hunger = Object.freeze({
  type: 'hunger',
  icon: HUNGER_ICON,
  action_mods: ['eating'],
  times: 15000 / 1000
})

const social = Object.freeze({
  type: 'social',
  icon: SOCIAL_ICON,
  action_mods: ['talking'],
  times: 15000 / 1000
})

const energy = Object.freeze({
  type: 'energy',
  icon: ENERGY_ICON,
  action_mods: ['sleeping'],
  times: 480000 / 1000
})

const hygiene = Object.freeze({
  type: 'hygiene',
  icon: HYGIENE_ICON,
  action_mods: ['bathing'],
  times: 20000 / 1000
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
    value: 100,
  },
  fun: {
    icon: FUN_ICON,
    value: 100,
  },
  hunger: {
    icon: HUNGER_ICON,
    value: 100,
  },
  social: {
    icon: SOCIAL_ICON,
    value: 100,
  },
  energy: {
    icon: ENERGY_ICON,
    value: 100,
  },
  hygiene: {
    icon: HYGIENE_ICON,
    value: 100,
  }
}

const action_mods = {
  nothing: {
    fill: 'nothing',
    changes: {
      baddler: -1,
      fun: -1,
      hunger: -2,
      social: -1,
      energy: -2,
      hygiene: -1
    }
  },
  eating: {
    fill: 'hunger',
    changes: {
      baddler: -5,
      fun: 0,
      hunger: 10,
      social: 0,
      energy: 0,
      hygiene: -1
    }
  },
  pooping: {
    fill: 'baddler',
    changes: {
      baddler: 10,
      fun: 0,
      hunger: -2,
      social: 0,
      energy: -2,
      hygiene: -5
    }
  },
  sleeping: {
    fill: 'energy',
    changes: {
      baddler: -2,
      fun: 2,
      hunger: -4,
      social: 0,
      energy: 10,
      hygiene: -1
    }
  },
  bathing: {
    fill: 'hygiene',
    changes: {
      baddler: 0,
      fun: 4,
      hunger: 0,
      social: 0,
      energy: 1,
      hygiene: 10
    }
  },
  talking: {
    fill: 'social',
    changes: {
      baddler: 0,
      fun: 0,
      hunger: -2,
      social: 10,
      energy: -2,
      hygiene: 0
    }
  },
  playing: {
    fill: 'fun',
    changes: {
      baddler: 0,
      fun: 10,
      hunger: -2,
      social: 0,
      energy: -4,
      hygiene: -2
    }
  }
}

const mood_mods = {
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
  },
  sleepy: {
    value: -50,
    timeout: 10000,
    emoji: '😴',
    label: 'sleepy',
    description: 'Duck is sleepy'
  },
  dirty: {
    value: -60,
    timeout: 10000,
    emoji: '💩',
    label: 'dirty',
    description: 'Duck is dirty'
  }
}


const state = {
  // available
  action_mods: { ...action_mods },
  mood_mods: { ...mood_mods },
  commands: [...commands],
  // game
  current_animation: null,
  current_speed: 1,
  // character
  needs: { ...needs },
  actions: [],
  mood: {
    value: 10,
    label: 'unhappy',
    mods: {
    }
  }
}

export default state