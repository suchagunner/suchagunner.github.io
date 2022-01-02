import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as _style from "./nav.module.css"

const Nav = ({ link }) => {
  return (
    <nav className={_style.nav}>
      {link.map(({ label, route }, i) => (
        <Link key={label} to={route} className={_style.link}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

Nav.propTypes = {
  link: PropTypes.array.isRequired,
}

export default Nav
