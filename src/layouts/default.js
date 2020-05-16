import React, { Component } from 'react'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import IndexPage from '../pages/index'
import AboutPage from '../pages/about'
import OutroPage from '../pages/outro'

import SwitchLanguageButton from '../components/SwitchLanguageButton'

class DefaultLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="default-layout">
          {/* navigation */}
          <nav>
            <ul>
              <li><Link to="/" >Index</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/outro" >Outro</Link></li>
            </ul>
          </nav>
          <SwitchLanguageButton />
          {/* main-content */}
          <section id="main-content">
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/outro" component={OutroPage} />
            </Switch>
          </section>
        </div>
      </BrowserRouter>
    )
  }
}

export default DefaultLayout