import React from "react"
import TimeAndAuthor from "./timeAndAuthor"
import { Link } from "gatsby"

export default class IndexRightArticle extends React.Component {
  render() {
    return (
      <div className={"index-right-article border-grey-bottom article-padding"}>
        <h3 className={"title"}>{this.props.article.title}</h3>
        <TimeAndAuthor
          author={this.props.article.author.username}
          date={this.props.article.created_at}
        />
        <p className={"description margin-top-base"}>
          {this.props.article.content.substring(0, 300).concat("...")}
        </p>
        <Link
          className={"underlined-black-text"}
          to={`/article/${this.props.article.id}`}
        >
          Czytaj dalej
        </Link>
      </div>
    )
  }
}
