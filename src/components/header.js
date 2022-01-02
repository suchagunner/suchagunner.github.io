import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import * as _style from "./header.module.css"

const Header = ({ siteTitle, nav }) => {
  const data = useStaticQuery(graphql`
    query SiteNavQuery {
      site {
        siteMetadata {
          nav {
            label
            route
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        height: 80,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: `0 auto`,
          maxWidth: 768,
          height: "100%",
          padding: `1rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className={_style.title}
          >
            <div>{siteTitle}</div>
          </Link>
        </h1>
        <Nav link={data.site.siteMetadata.nav} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.propTypes = {
  items: PropTypes.array,
}

export default Header
