import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as articleStyle from "./article.module.css"

export default function Article({ node, to }) {
  return (
    <article key={node.id} className={articleStyle.item}>
      <h2 style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
        <Link to={to} className={articleStyle.link}>
          {node.frontmatter.title}
        </Link>
      </h2>
      <p style={{ marginBottom: "0.75rem" }}>{node.frontmatter.description} </p>
      <p>{node.frontmatter.date}</p>
    </article>
  )
}
