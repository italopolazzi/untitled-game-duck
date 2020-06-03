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
  mods: ['pooping', 'nothing', 'eating'],
  times: 15000 / 1000
})

const fun = Object.freeze({
  type: 'fun',
  icon: FUN_ICON,
  mods: ['playing'],
  times: 120000 / 1000
})

const hunger = Object.freeze({
  type: 'hunger',
  icon: HUNGER_ICON,
  mods: ['eating'],
  times: 15000 / 1000
})

const social = Object.freeze({
  type: 'social',
  icon: SOCIAL_ICON,
  mods: ['talking'],
  times: 15000 / 1000
})

const energy = Object.freeze({
  type: 'energy',
  icon: ENERGY_ICON,
  mods: ['sleeping'],
  times: 480000 / 1000
})

const hygiene = Object.freeze({
  type: 'hygiene',
  icon: HYGIENE_ICON,
  mods: ['bathing'],
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

const mods = {
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

const state = {
  mods: { ...mods },
  needs: { ...needs },
  commands: [...commands],
  actions: [],
  current_animation: null,
  current_speed: 1,
  mood: {
    value: 10,
    label: 'unhappy',
    modifiers: []
  }
}

export default state