import React from "react";
import VideoPlaceholder from "../img/video-placeholder.jpg";

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="img-container">
          {item.data.thumbnail === "self" ||
          item.data.thumbnail === "default" ? (
            <img src={VideoPlaceholder} alt={"Video"} />
          ) : (
            <img src={item.data.thumbnail} alt={item.data.title} />
          )}
        </div>
        <h3 className="mt-2">{item.data.title}</h3>
        <div className="comments">{`Number of comments: ${item.data.num_comments}`}</div>
        <a href={item.data.permalink}>Link</a>
      </div>
    );
  }
}
