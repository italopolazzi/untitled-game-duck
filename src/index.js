import React from 'react'
import ReactDom from 'react-dom'
import '@/plugins/i18n'

import './styles/index.sass'
// import GamePage from '@/pages/game'
import StartGamePage from '@/pages/start-game'


const wrapper = document.querySelector("#app")
// wrapper ? ReactDom.render(<GamePage />, wrapper) : false
wrapper ? ReactDom.render(<StartGamePage />, wrapper) : false