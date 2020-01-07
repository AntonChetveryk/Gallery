import React from "react";

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="img-container">
          <img src={item} alt={item.data.title} className="img" />
        </div>
        <h3 className="mt-2">{item.data.title}</h3>
        <div className="comments">{`Number of comments: ${item.data.num_comments}`}</div>
        <a href={item.data.permalink}>Link</a>
      </div>
    );
  }
}
