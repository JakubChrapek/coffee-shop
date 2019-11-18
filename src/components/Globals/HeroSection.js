import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-center">{title}</h1>
      {children}
    </BackgroundImage>
  )
}

HeroSection.defaultProps = {
  title: "Ziarno traktowane z troską odwdzięczy się aromatem",
  styleClass: "default-background",
}
