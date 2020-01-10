import React from "react";
import VideoPlaceholder from "../img/video-placeholder.jpg";

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="img-container">
          {item.thumbnail === "self" || item.thumbnail === "default" ? (
            <img src={VideoPlaceholder} alt={"Video"} />
          ) : (
            <img src={item.thumbnail} alt={item.title} />
          )}
        </div>
        <h3 className="mt-2">{item.title}</h3>
        <div className="comments">{`Number of comments: ${item.num_comments}`}</div>
        <a
          href={`https://www.reddit.com/${item.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
    );
  }
}
