import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Globals/Navbar"
import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
