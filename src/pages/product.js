import React from "react"
import { Link, graphql } from "gatsby"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProduct(
      sort: { fields: defaultProductVariant___price, order: DESC }
    ) {
      edges {
        node {
          title
          defaultProductVariant {
            price
            images {
              asset {
                url
              }
            }
          }
          categories {
            title
          }
          vendor {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`
const ProductPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Products</h1>

    {data.allSanityProduct.edges.map(({ node: product }) => (
      <div tw="flex justify-between border-b border-indigo-500">
        <h4 tw="text-xl text-indigo-500 py-4 flex items-baseline justify-end">
          {product.title}
        </h4>
        <div tw="bg-indigo-800 text-indigo-300 w-32 py-4 text-right px-2 text-3xl flex items-baseline justify-end">
          ${product.defaultProductVariant.price}
        </div>
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default ProductPage
