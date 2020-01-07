import React from "react";
//import itemsArr from "../itemsArr";
import Item from "./Item";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getData = () => {
    const link = "https://www.reddit.com/r/reactjs.json?limit=30";

    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.data.children[0].data);
        this.setState({
          data: data.data.children
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <h1 className="header-tittle">Top commented.</h1>
        <div className="items-container">
          {this.state.data.map((item, i) => {
            return (
              <div key={i} className="item">
                <Item item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
