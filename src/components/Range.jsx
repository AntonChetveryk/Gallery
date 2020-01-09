import React from "react";

export default class Range extends React.Component {
  render() {
    return (
      <input
        type="range"
        min="0"
        max="200"
        step="1"
        value={this.props.num_comments}
        className="range"
        onChange={this.props.setNumComments}
      />
    );
  }
}
