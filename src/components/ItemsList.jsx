import React from "react";
import Item from "./Item";

export default class ItemsList extends React.Component {
  render() {
    const { data, num_comments } = this.props;
    console.log(data.length);

    return (
      <>
        {data.length
          ? data
              .filter(item => item.data.num_comments >= num_comments)
              .sort((a, b) => b.data.num_comments - a.data.num_comments)
              .map((item, i) => {
                return (
                  <div key={i} className="item">
                    <Item item={item} />
                  </div>
                );
              })
          : "No results found matching your criteria."}
      </>
    );
  }
}
