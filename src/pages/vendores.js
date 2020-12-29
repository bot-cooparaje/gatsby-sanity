import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityVendor {
      edges {
        node {
          id
          title
          logo {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
const VendorsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allSanityVendor.edges.map(({ node: vendor }) => (
      <div>
        <h2 style={{ fontSize: "24px" }}>{vendor.title}</h2>
        <Image fluid={vendor.logo.asset.fluid} alt={vendor.title} />
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default VendorsPage
