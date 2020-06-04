const global = {
  colors: {
    icon: {
      '0': '#',
      '1': '6',
      '2': '6',
      '3': '6',
      '4': '6',
      '5': '6',
      '6': '6',
      dark: '#f8f8f8',
      light: '#666666'
    },
    active: 'rgba(221,221,221,0.5)',
    black: '#3D3D3D',
    border: {
      dark: 'rgba(255,255,255,0.33)',
      light: 'rgba(0,0,0,0.33)'
    },
    brand: '#8D07F6',
    control: {
      dark: 'accent-1',
      light: 'brand'
    },
    focus: '#FFFF05',
    placeholder: '#A6ABAB',
    selected: '#8D07F6',
    text: {
      dark: '#f8f8f8',
      light: '#444444'
    },
    white: '#FFFFFF',
    'accent-1': '#FFFF05',
    'accent-2': '#1FFFE6',
    'accent-3': '#FF5C12',
    'accent-4': '#FF231F',
    'dark-1': '#333333',
    'dark-2': '#555555',
    'dark-3': '#777777',
    'dark-4': '#999999',
    'dark-5': '#999999',
    'dark-6': '#999999',
    'light-1': '#F8F8F8',
    'light-2': '#F2F2F2',
    'light-3': '#EDEDED',
    'light-4': '#DADADA',
    'light-5': '#DADADA',
    'light-6': '#DADADA',
    'neutral-1': '#00873D',
    'neutral-2': '#3D138D',
    'neutral-3': '#00739D',
    'neutral-4': '#A2423D',
    'status-critical': '#FF4040',
    'status-error': '#FF4040',
    'status-warning': '#FFAA15',
    'status-ok': '#00C781',
    'status-unknown': '#CCCCCC',
    'status-disabled': '#CCCCCC'
  },
  animation: {
    duration: '1s',
    jiggle: {
      duration: '0.1s'
    }
  },
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: '4px',
    large: '12px',
    xlarge: '24px'
  },
  breakpoints: {
    small: {
      value: 768,
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: '4px',
        large: '6px',
        xlarge: '12px'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        xxsmall: '2px',
        xsmall: '3px',
        small: '6px',
        medium: '12px',
        large: '24px',
        xlarge: '48px'
      },
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%'
      }
    },
    medium: {
      value: 1536
    },
    large: {}
  },
  deviceBreakpoints: {
    phone: 'small',
    tablet: 'medium',
    computer: 'large'
  },
  control: {
    border: {
      width: '1px',
      radius: '4px',
      color: 'border'
    }
  },
  debounceDelay: 300,
  drop: {
    background: '#ffffff',
    border: {
      width: '0px',
      radius: '0px'
    },
    shadowSize: 'small',
    zIndex: '20'
  },
  edgeSize: {
    none: '0px',
    hair: '1px',
    xxsmall: '3px',
    xsmall: '6px',
    small: '12px',
    medium: '24px',
    large: '48px',
    xlarge: '96px',
    responsiveBreakpoint: 'small'
  },
  elevation: {
    light: {
      none: 'none',
      xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
      small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
      medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
      large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
      xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
    },
    dark: {
      none: 'none',
      xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
      small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
      medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
      large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
      xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
    }
  },
  focus: {
    border: {
      color: 'focus'
    }
  },
  font: {
    size: '18px',
    height: '24px',
    maxWidth: '432px',
    family: 'Open Sans, Helvetica, sans-serif',
  },
  hover: {
    background: {
      dark: {
        color: 'active',
        opacity: 'medium'
      },
      light: {
        color: 'active',
        opacity: 'medium'
      }
    },
    color: {
      dark: 'white',
      light: 'black'
    }
  },
  input: {
    padding: '12px',
    weight: 600
  },
  opacity: {
    strong: 0.8,
    medium: 0.4,
    weak: 0.1
  },
  selected: {
    background: 'selected',
    color: 'white'
  },
  spacing: '24px',
  size: {
    xxsmall: '48px',
    xsmall: '96px',
    small: '192px',
    medium: '384px',
    large: '768px',
    xlarge: '1152px',
    xxlarge: '1536px',
    full: '100%'
  }
}

export default global