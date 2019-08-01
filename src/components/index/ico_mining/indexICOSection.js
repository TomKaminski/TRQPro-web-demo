import React from "react"
import { Row, Col } from "react-bootstrap"
import IndexMiniArticle from "../shared/indexMiniArticle"
import IndexArticleWithCategory from "../shared/IndexArticleWithCategory"
import { Link } from "gatsby"

const IndexICOSection = props => {
  let leftSideArticles = props.articles.slice(0, 3)
  let rightSideArticles = props.articles.slice(3, 5)

  if (props.articles && props.articles.length > 0) {
    return (
      <section
        className={"border-grey-bottom-dotted section-margin-and-padding"}
      >
        <Row>
          <Col>
            <div className={"section"}>
              <div className={"section-title-container"}>
                <h3 className={"section-title"}>{props.sectionName}</h3>
                <Link to={`/category/cat-ico`} className={"section-show-all"}>
                  zobacz wszystkie
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} lg={6} md={8}>
            {leftSideArticles.map((el, _) => (
              <IndexMiniArticle article={el} key={el.id} />
            ))}
          </Col>
          <Col xs={12} sm={12} lg={6} md={4}>
            <Row>
              {rightSideArticles.map((el, _) => (
                <Col>
                  <IndexArticleWithCategory article={el} key={el.id} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </section>
    )
  } else {
    return <div></div>
  }
}

export default IndexICOSection
