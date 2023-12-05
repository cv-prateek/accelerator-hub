import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/feature";
import Products from "../components/products";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { id: { eq: "hero" } }) {
        frontmatter {
          id
          banner
          title
          subtitle
        }
      }
    }
  `)

  return (
    <div class="bg-white">
      <Header />
      <Hero />
      <Features />
      <Products />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Accelerator Hub</title>


