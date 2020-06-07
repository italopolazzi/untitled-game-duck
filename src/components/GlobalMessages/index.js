import React from 'react'

import { Box, Text } from 'grommet'

import { connect } from 'react-redux'

import './style.sass'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const GlobalMessages = ({ global_messages }) => {

  const messages = global_messages.map(
    (message, index) =>
      <CSSTransition
        key={index}
        timeout={300}
        classNames="slidey"
        unmountOnExit
        appear>
        <Box
          className="global-message"
          as="div"
          role="alert"
          aria-live="assertive"
          direction="row"
          align="center"
          justify="center"
          background="light-1"
          round
          border={{ size: "medium", color: "accent-3" }}
          margin="small"
          pad="medium"
        >
          <Text weight="bold"> {message}</Text>
        </Box>
      </CSSTransition>
  )

  return (

    <Box
      className="global-messages"
      direction="column"
      justify="start"
      align="end"
    >
      <TransitionGroup component={null}>
        {messages}
      </TransitionGroup>
    </Box>

  )
}

const mapStateToProps = state => ({
  global_messages: state.game.global_messages
})

export default connect(mapStateToProps)(GlobalMessages)
