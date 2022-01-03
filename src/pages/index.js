import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as _style from "./index.module.css"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 style={{ fontSize: "2.25rem", fontFamily: "Poppins" }}>welcome</h1>
    <p style={{ color: "#646464", fontSize: "1rem" }}>
      안녕하세요.😁 소프트웨어 개발자 이건호입니다. 2020년부터 개발 일을 해오고
      있으며 현재{" "}
      <a
        href="https://www.lugstay.com"
        style={{ textDecoration: "none", color: "#646464", fontWeight: "bold" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        럭스테이
      </a>
      를 서비스 중인
      <a
        style={{
          textDecoration: "none",
          color: "#646464",
          fontWeight: "bold",
        }}
        href="https://hello.thewhale.blue/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🐳블루웨일컴퍼니
      </a>
      에서 프론트엔드 개발자로 일하고 있습니다.
    </p>
    <div className={_style["history"]}>
      <StaticImage
        src="../images/profile-zepeto.png"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Me"
      />
      <div style={{ flex: 1 }}>
        <h2>journey👨🏽‍💻</h2>
        <ul className={_style.list}>
          <li className={_style.item}>
            <h3 style={{ marginBottom: "0.25rem" }}>블루웨일컴퍼니</h3>
            <p>프론트엔드 개발 및 네이티브 앱 개발</p>
            <p style={{ color: "#646464" }}>2020.02 ~</p>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
