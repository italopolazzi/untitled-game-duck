import React from 'react'
import ReactDom from 'react-dom'
import HelloWorld from './components/HelloWorld'

const wrapper = document.querySelector("#app")
wrapper ? ReactDom.render(<HelloWorld />, wrapper) : false