import React from "react"
import { Row, Col } from "react-bootstrap"
import IndexMarketAnalysisBigArticle from "./indexMarketAnalysisBigArticle"
import IndexMiniArticle from "../shared/indexMiniArticle"
import { Link } from "gatsby"

const IndexMarketAnalysisSection = props => {
  if (props.articles && props.articles.length > 0) {
    let mainArticle = props.articles[0]
    let miniArticles = props.articles.slice(1, 4)

    return (
      <section
        className={"border-grey-bottom-dotted section-margin-and-padding"}
      >
        <Row>
          <Col>
            <div className={"section"}>
              <div className={"section-title-container"}>
                <h3 className={"section-title"}>{props.sectionName}</h3>
                <Link
                  to={`/category/cat-at`}
                  className={"section-show-all"}
                  state={{ categoryName: props.sectionName }}
                >
                  zobacz wszystkie
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={6} md={8}>
            <IndexMarketAnalysisBigArticle article={mainArticle} />
          </Col>
          <Col xs={12} sm={12} lg={6} md={4}>
            {miniArticles.map((element, i) => (
              <IndexMiniArticle
                article={element}
                isLast={miniArticles.length === i + 1}
              />
            ))}
          </Col>
        </Row>
      </section>
    )
  } else {
    return <div></div>
  }
}

export default IndexMarketAnalysisSection
