// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
      } = value

      const toggleContent = () => {
        onToggleShowContent()
      }

      const toggleRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      const toggleLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      return (
        <div className="layout-continer">
          <h1 className="layout-heading">Layout</h1>
          <div className="label-container">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={toggleContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="label-container">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={toggleLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="label-container">
            <input
              type="checkbox"
              id="rightNavBar"
              checked={showRightNavbar}
              onChange={toggleRightNavbar}
            />
            <label htmlFor="rightNavBar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
