import React from "react";
//import itemsArr from "../itemsArr";
import Item from "./Item";
import Spinner from "../img/loader.gif";
import AutoRefresh from "./AutoRefresh";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false
    };
  }

  getData = () => {
    const link = "https://www.reddit.com/r/reactjs.json?limit=30";

    this.setState({
      isLoading: !this.state.isLoading
    });

    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          isLoading: !this.state.isLoading
        });
        this.setState({
          data: data.data.children
        });
        console.log("getData");
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="container">
        <h1 className="header-tittle">Top commented.</h1>
        <AutoRefresh getData={this.getData} />
        <div className={isLoading ? "loader-container" : "items-container"}>
          {isLoading ? (
            <img src={Spinner} alt="loading" className="loading" />
          ) : (
            data
              .sort((a, b) => b.data.num_comments - a.data.num_comments)
              .map((item, i) => {
                return (
                  <div key={i} className="item">
                    <Item item={item} />
                  </div>
                );
              })
          )}
        </div>
      </div>
    );
  }
}
