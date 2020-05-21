import React from 'react'
import ReactDom from 'react-dom'
import '@plugins/i18n'

// import DefaultLayout from '@layouts/default'
import GameLayout from '@layouts/game'

const wrapper = document.querySelector("#app")
wrapper ? ReactDom.render(<GameLayout />, wrapper) : false