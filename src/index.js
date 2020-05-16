import React from 'react'
import ReactDom from 'react-dom'
import DefaultLayout from './layouts/default'

const wrapper = document.querySelector("#app")
wrapper ? ReactDom.render(<DefaultLayout />, wrapper) : false