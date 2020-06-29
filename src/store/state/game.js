const needs = {
  baddler: {
    title: "baddler",
    value: 90,
  },
  fun: {
    title: "fun",
    value: 90,
  },
  hunger: {
    title: "hunger",
    value: 90,
  },
  social: {
    title: "social",
    value: 50,
  },
  energy: {
    title: "energy",
    value: 10,
  },
  hygiene: {
    title: "hygiene",
    value: 10,
  }
}

const state = {
  global_messages: [],
  current_speed: 1,
  needs: { ...needs },
  actions: [],
  lifes: 3,
  status: 'ALIVE',
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