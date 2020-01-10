import React from "react";
import Item from "./Item";

export default class ItemsList extends React.Component {
  getItemsByComment = (data, num_comments) => {
    return data
      .filter(item => item.data.num_comments >= num_comments)
      .sort((a, b) => b.data.num_comments - a.data.num_comments);
  };

  render() {
    const { data, num_comments } = this.props;
    const itemsByComment = this.getItemsByComment(data, num_comments);

    return (
      <>
        {itemsByComment.length > 0 ? (
          itemsByComment.map((item, i) => {
            return (
              <div key={i} className="item">
                <Item item={item.data} />
              </div>
            );
          })
        ) : (
          <span className="noResult">
            No results found matching your criteria.
          </span>
        )}
      </>
    );
  }
}
