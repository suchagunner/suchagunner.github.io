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
    <p style={{ color: "#000000", fontSize: "1rem" }}>
      안녕하세요.😁 개발을 시작한지 <i>2년이</i> 조금 넘은 소프트웨어 개발자{" "}
      <b>이건호</b>입니다. 여기선 개발하면서 느끼는 저의 생각들이나 기억하고
      싶은 것들을 기록하고 있습니다.
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
          <li className={_style.listItem}>
            <h3 style={{ marginBottom: "0.25rem" }}>블루웨일컴퍼니</h3>
            <div style={{ marginTop: "0.5rem" }}>
              <dl>
                <dt>
                  ·{" "}
                  <a
                    href="https://www.lugstay.com"
                    style={{
                      textDecoration: "none",
                      color: "#646464",
                      fontWeight: "bold",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LugStay
                  </a>{" "}
                  개발
                </dt>
                <dd>
                  전국 락커, 상점의 빈 공간을 실시간으로 예약하고, 언제 어디서나
                  다양한 물품을 보관할 수 있는 서비스
                </dd>
              </dl>
              <dl>
                <dt>
                  ·{" "}
                  <a
                    href="https://u-hoo.com"
                    style={{
                      textDecoration: "none",
                      color: "#646464",
                      fontWeight: "bold",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UHOO
                  </a>{" "}
                  개발
                </dt>
                <dd>
                  다양한 형태의 공간을 수익화 하고자 하는 고객{" "}
                  <i style={{ fontSize: "0.75rem", color: "#676767" }}>
                    호스트
                  </i>{" "}
                  과 공간을 사업에 필요로 하는 고객{" "}
                  <i style={{ fontSize: "0.75rem", color: "#676767" }}>셀러</i>{" "}
                  을 연결해주는 공간 매칭 서비스
                </dd>
              </dl>
              <p style={{ color: "#646464" }}>2020.02 ~ 2022.05</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
