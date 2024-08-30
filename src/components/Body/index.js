// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const leftNavBar = () => (
        <div className="navbar-container">
          <h1 className="left-navbar">Left Navbar Menu</h1>
          <ul className="navbar-list-container">
            <li className="left-item">Item 1</li>
            <li className="left-item">Item 2</li>
            <li className="left-item">Item 3</li>
            <li className="left-item">Item 4</li>
          </ul>
        </div>
      )
      const content = () => (
        <div className="content-container">
          <h1 className="content-heading">Content</h1>
          <p className="content-discription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )
      const rightNavBar = () => (
        <div className="right-navbar-container">
          <h1 className="right-navbar">Right Navbar</h1>
          <div className="ads-container">
            <div className="ad-container">
              <p className="ad-heading">Ad 1</p>
            </div>
            <div className="ad-container">
              <p className="ad-heading">Ad 2</p>
            </div>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? leftNavBar() : null}
          {showContent ? content() : null}
          {showRightNavbar ? rightNavBar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
