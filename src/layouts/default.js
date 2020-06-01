import React, { useState, useEffect } from 'react'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import HomePage from '@pages/home/index'
import GamePage from '@pages/game/index'

import SwitchLanguageButton from '@components/SwitchLanguageButton'
import { Grommet, Header, Nav, Anchor, Button, Text, Main } from 'grommet'

import dark_theme from '../themes/dark'
import light_theme from '../themes/light'

const initial_theme = 'light'

const theming = {
  light: light_theme,
  dark: dark_theme
}

import { Provider } from 'react-redux'

import store from '../store'

const DefaultLayout = () => {

  const [theme, setTheme] = useState(theming[initial_theme])
  const [themeMode, setThemeMode] = useState(initial_theme)

  const switchTheme = () => {

    setTheme(themeMode === 'dark' ? light_theme : dark_theme)
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.title = `Current theme is ${theme}`
  })

  return (
    <Provider store={store}>
      <Grommet theme={theme} themeMode={themeMode} full cssVars={true}>
        {/* <ThemeContext.Extend value={myTheme} > */}
        <BrowserRouter>
          <div className="default-layout">
            {/* navigation */}
            <Header elevation="xsmall" >
              <Nav direction="row" background="brand" pad="small" fill>
                <Anchor href="/" hoverIndicator label="Home" />
                <Anchor href="/game" hoverIndicator label="Game" />
                <Button label="Switch theme" onClick={switchTheme} />
                <Text>{themeMode === 'dark' ? 'Tema escuro' : 'Tema claro'}</Text>
              </Nav>
            </Header>
            {/* <SwitchLanguageButton /> */}
            {/* main-content */}
            <section id="main-content">
              <Main pad="large" >
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/game" exact component={GamePage} />
                </Switch>
              </Main>
            </section>
          </div>
        </BrowserRouter>
        {/* </ThemeContext.Extend> */}
      </Grommet >
    </Provider>
  )
}

export default DefaultLayout