import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Sidebar, Button, Nav, Text, DropButton, Drop, Box } from 'grommet'
import Emoji from '@components/Emoji'

import Icon from '@mdi/react'
import { mdiClose, mdiDotsVertical, mdiVolumeMute } from '@mdi/js'
import './style.sass'

const DropButtonContent = ({ closeCallback }) => {
  return (
    <Sidebar background="white" round border={{ color: "accent-2", size: "medium" }} pad="large" direction="column"
      header={
        <Box direction="row" align="center" justify="between" fill>
          <Text weight="bold">Options</Text>
          <Button onClick={closeCallback} icon={<Icon size={1} path={mdiClose} />}></Button>
        </Box>
      }
      footer={
        <Text weight="bold">Made with <Emoji symbol="💖" label="love" /> by Ítalo Polazzi</Text>
      }
    >
      <Box
        gap="medium"
        direction="column"
        align="start"
        justify="center">

        <Button
          fill
          onClick={closeCallback}
          icon={<Icon size={1} path={mdiVolumeMute} />}
          label="Disable audio"
        />

        <Button
          fill
          onClick={closeCallback}
          icon={<Icon size={1} path={mdiVolumeMute} />}
          label="Theme"
        />

        <Button
          fill
          onClick={closeCallback}
          icon={<Icon size={1} path={mdiVolumeMute} />}
          label="Translation"
        />

      </Box>
    </Sidebar>
  )
}

const MainMenu = props => {
  const [drop, setDrop] = useState(false)

  return (
    <div className="main-menu" >
      <DropButton
        size="large"
        // dropAlign={{ top: true }}
        open={drop}
        dropProps={{ elevation: false, plain: true }}
        dropContent={<DropButtonContent closeCallback={() => setDrop(false)} />} >
        <Button onClick={() => setDrop(true)} icon={<Icon size={1} path={mdiDotsVertical} />} ></Button>
      </DropButton>
    </div>
  )
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)