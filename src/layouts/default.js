import React, { useState, useEffect } from 'react'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import IndexPage from '@pages/index'
import AboutPage from '@pages/about'
import OutroPage from '@pages/outro'

import SwitchLanguageButton from '@components/SwitchLanguageButton'
import { Grommet, Header, Nav, Anchor, Button, Text, Box, ThemeContext,Main } from 'grommet'

import dark_theme from '../themes/dark'
import light_theme from '../themes/light'

const DefaultLayout = () => {

  const [theme, setTheme] = useState(dark_theme)
  const [themeMode, setThemeMode] = useState('dark')

  const switchTheme = () => {

    setTheme(themeMode === 'dark' ? light_theme : dark_theme)
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.title = `Current theme is ${theme}`
  })

  return (
    <Grommet theme={theme} themeMode={themeMode} full cssVars={true}>
      {/* <ThemeContext.Extend value={myTheme} > */}
      <BrowserRouter>
        <div className="default-layout">
          {/* navigation */}
          <Header elevation="xsmall" >
            <Nav direction="row" background="brand" pad="medium" fill>
              <Anchor href="/" hoverIndicator label="Home" />
              <Anchor href="/about" hoverIndicator label="About" />
              <Anchor href="/outro" hoverIndicator label="Outro" />
              <Button label="Switch theme" onClick={switchTheme} />
              <Text>{themeMode === 'dark' ? 'Tema escuro' : 'Tema claro'}</Text>
            </Nav>
          </Header>
          <SwitchLanguageButton />
          {/* main-content */}
          <section id="main-content">
            <Main pad="large" >
              <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/outro" exact component={OutroPage} />
              </Switch>
            </Main>
          </section>
        </div>
      </BrowserRouter>
      {/* </ThemeContext.Extend> */}
    </Grommet >
  )
}

export default DefaultLayout