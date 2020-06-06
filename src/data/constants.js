export const MAX_NEED_VALUE = 100
export const MIN_NEED_VALUE = 0
export const CURRENT_ACTION_INDEX = 0
export const ACTION_MOD_PERCENT = 0.1
export const MOOD_MOD_DEFAULT_TIMEOUT = 10000

export const ACTION_MODS = Object.freeze({
  doing_nothing: {
    fills_need: 'doing_nothing',
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
    fills_need: 'hunger',
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
    fills_need: 'baddler',
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
    fills_need: 'energy',
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
    fills_need: 'hygiene',
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
    fills_need: 'social',
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
    fills_need: 'fun',
    changes: {
      baddler: 0,
      fun: 10,
      hunger: -2,
      social: 0,
      energy: -4,
      hygiene: -2
    }
  }
})

export const MOOD_MODS = Object.freeze({
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
  },
  satiated: {
    value: 10,
    timeout: 10000,
    emoji: '🤐',
    label: 'satiated',
    description: 'Duck is satiated'
  },
  bursting: {
    value: 10,
    timeout: 10000,
    emoji: '😵',
    label: 'bursting',
    description: 'Duck is bursting'
  },
  shining: {
    value: 10,
    timeout: 10000,
    emoji: '🌟',
    label: 'shining',
    description: 'Duck is shining'
  },
  hungry: {
    value: -50,
    timeout: 10000,
    emoji: '🌟',
    label: 'hungry',
    description: 'Duck is hungry'
  }
})