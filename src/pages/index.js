import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCoffee } from "react-icons/fa"
import HeroSection from "../components/Globals/HeroSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Ziarno traktowane z troską odwdzięczy się aromatem"
      styleClass="default-background"
    />
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "coffee-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
