import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as article from "./article.module.css"

const TILPage = ({ data }) => {
  let emptyContainer = <div className="empty-list"><p>Wow. such empty.</p></div>
  if(data.allMdx.nodes.length > 0) emptyContainer = <></>

  return (
    <Layout pageTitle="TIL List">
      <Seo title="TIL" />
      {data.allMdx.nodes.map(node => {
        return (
          <article key={node.id} className={article.item}>
            <h2>
              <Link to={`/til/${node.id}`} className={article.link}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
          </article>
        )
      })}
      {emptyContainer}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/\/til\//" } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY년 MM월 DD일")
          title
        }
        id
      }
    }
  }
`

export default TILPage
