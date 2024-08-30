import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div className="width-container">
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
