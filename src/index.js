import React from 'react'
import ReactDom from 'react-dom'
import '@/plugins/i18n'

import './styles/index.sass'
import Pages from '@/pages'

const wrapper = document.querySelector("#app")
wrapper ? ReactDom.render(<Pages />, wrapper) : false