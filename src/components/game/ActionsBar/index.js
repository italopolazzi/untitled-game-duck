import React, { useEffect, useState, useRef } from 'react'

import { connect } from 'react-redux'
import { Box, Button, Meter } from 'grommet'
import Icon from '@mdi/react'

import "./style.sass"

import { removeAction as REMOVE_ACTION } from '@/store/actions/game'

const useInterval = (callback, delay) => {
  const saved_callback = useRef();

  useEffect(() => {
    saved_callback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => saved_callback.current()
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const CurrentAction = ({ action }) => {
  const millisseconds = 1000
  const [value, setValue] = useState(100)
  const [count, setCount] = useState(1)

  useInterval(() => {
    const { duration } = action
    const res = 100 - (100 * (count * millisseconds / duration))
    setValue(res)
    setCount(count + 1)
  }, millisseconds)

  return (
    <Box
      direction="column"
      align="center"
      justify="center"
      id="current-action"
      width="3rem"
      height="3rem"
    >
      <Button
        style={{ background: 'var(--brand)' }}
        className="neuromorphic"
        icon={<Icon
          path={action.icon}
          size={1} />}
      />
      <Meter
        id="actions-timer"
        round
        type="circle"
        values={[{
          value,
          color: "accent-2"
        }]}
      />
    </Box>
  )
}



const ActionsBar = ({ actions, removeAction }) => {
  return (
    <Box
      id="actions-bar"
      direction="row"
      justify="start"
      align="center"
      gap="medium"
    >
      {
        actions.map((action, index) => {
          if (index === 0) {
            return (
              <Box onClick={() => removeAction(index)}>
                <CurrentAction action={action} />
              </Box>
            )
          }
          return (
            <Button
              key={index}
              onClick={() => removeAction(index)}
              style={{ background: 'var(--brand)' }}
              className="neuromorphic"
              icon={<Icon path={action.icon}
                size={1} />}
            />
          )
        })
      }
    </Box>
  )
}

const mapStateToProps = state => ({
  actions: state.game.actions
})

const mapDispatchToProps = dispatch => ({
  removeAction: index => dispatch(REMOVE_ACTION(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionsBar)