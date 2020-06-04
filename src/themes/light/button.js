const button = {
  border: {
    width: '2px',
    radius: '99999999999px'
  },
  primary: {},
  disabled: {
    opacity: 0.3
  },
  minWidth: '96px',
  maxWidth: '384px',
  padding: {
    vertical: '4px',
    horizontal: '22px'
  },
  extend: `
        & {
          box-shadow: 3px 3px 11px #7106c5, -3px -3px 11px #a908ff;
          border-radius: 99999999999px;
        }
        &:hover {
          box-shadow: 0 0 0 transparent;
        }
      `
}

export default button