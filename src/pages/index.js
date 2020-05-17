import React, { Fragment } from 'react'

import HelloWorld from '@components/HelloWorld'
import CharacterRegister from '@components/CharacterRegister'

const IndexPage = () => {
  return (
    <Fragment>
      This is the index page content
      <HelloWorld />
      <CharacterRegister />
    </Fragment>
  )
}

export default IndexPage