import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` 👨‍🚀  `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
