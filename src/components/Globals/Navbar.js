import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../images/coffee-icon.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link to="/" className="navbar-brand ml-sm-5">
          <img width="50px" src={Logo} alt="logo" />
          {/* Coffee by Taqiyyah from the Noun Project
           */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item ml-sm-5">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/* <FaCartArrowDown className="mr-sm-5 cart-icon" /> */}
        </div>
      </nav>
    )
  }
}
