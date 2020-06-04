import React from 'react'

const Emoji = props => {
  const { label, symbol } = props
  console.log(symbol);
  
  return (
    <span
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
      className="emoji">{symbol}</span>
  )
}

export default Emoji