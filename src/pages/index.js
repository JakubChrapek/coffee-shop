import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCoffee } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>We will rock coffee here 🚀 </p>
    <Link to="/page-2">
      Click this coffee!
      <FaCoffee size="5em" color="rebeccapurple" />
    </Link>
  </Layout>
)

export default IndexPage
