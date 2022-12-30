import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as _style from "./index.module.css"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <article style={{ margin: "2rem 1rem" }}>
      <section style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <figure style={{ textAlign: "center" }}>
          <StaticImage
            src="../images/profile-zepeto.png"
            width={92}
            height={92}
            transformOptions={{ fit: "contain", cropFocus: "attention" }}
            quality={95}
            style={{ borderRadius: '50%' }}
            imgStyle={{ borderRadius: "50%" }}
            backgroundColor="rgb(88, 72, 248)"
            formats={["auto", "webp", "avif"]}
            alt="Me"
          />
        </figure>
        <h1 style={{ flex: "0 1 208px" }}>
          안녕하세요!
          <br />
          프론트엔드 개발자 이건호입니다.
        </h1>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>journey</h2>
        <ul className={_style.list}>
          <li className={_style.listItem}>
            <h3 style={{ marginBottom: "0.25rem" }}>Kurly</h3>
            <div style={{ marginTop: "0.5rem" }}>
              <dl>
                <dt>
                  ·{" "}
                  <a
                    href="https://www.kurly.com"
                    style={{
                      textDecoration: "none",
                      color: "#646464",
                      fontWeight: "bold",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CMS 및 내부 툴
                  </a>{" "}
                  개발
                </dt>
                <dd>
                  커머스 도메인에서의 내부 어드민 툴 개발
                  <ul style={{ marginTop: "1rem" }}>
                    <li style={{ margin: 0 }}>회원/마케팅, 상품</li>
                    <li style={{ margin: 0 }}>WYSIWYG 에디터</li>
                  </ul>
                </dd>
              </dl>
              <p style={{ color: "#646464" }}>2022.08 ~ current</p>
            </div>
          </li>
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
      </section>
    </article>
  </Layout>
)

export default IndexPage
