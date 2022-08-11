import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {Link, useStaticQuery, graphql} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

import Article from "../components/article"

import Layout from "../components/layout"
import Seo from "../components/seo"

const LogPage = ({data}) => {
    let emptyContainer = (
        <div className="empty-list">
            <p>Wow. such empty.</p>
        </div>
    )
    if (data.allMdx.nodes.length > 0) emptyContainer = <></>

    return (
        <Layout pageTitle="Log List">
            <Seo title="Log"/>
            <section
                style={{position: "relative", width: "100%", paddingBottom: "37.5%"}}
            >
                <StaticImage
                    src="../images/bg.section.log.jpg"
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                    }}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Log"
                />
            </section>

            <section style={{marginTop: "2rem"}}>
                {data.allMdx.nodes.map(node => (
                    <Article key={`article-id-${node.id}`} to={`/log/${node.id}`} node={node}/>
                ))}
            </section>
            {emptyContainer}
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { fileAbsolutePath: { regex: "//log//" } }
        ) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY년 MM월 DD일")
                    title
                    description
                }
                id
            }
        }
    }
`

export default LogPage
