import React from "react";
//import itemsArr from "../itemsArr";

import Spinner from "../img/loader.gif";
import AutoRefresh from "./AutoRefresh";
import Range from "./Range";
import ItemsList from "./ItemsList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false,
      num_comments: 0
    };
  }

  setNumComments = e => {
    let value = e.target.value;
    this.setState({
      num_comments: value
    });
  };

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
    const { isLoading, data, num_comments } = this.state;
    return (
      <div className="container">
        <h1 className="header-tittle">Top commented.</h1>
        <span className="currentFilter">{`Current filter: ${num_comments}`}</span>
        <AutoRefresh getData={this.getData} />
        <Range
          setNumComments={this.setNumComments}
          num_comments={num_comments}
        />
        <div className={isLoading ? "loader-container" : "items-container"}>
          {isLoading ? (
            <img src={Spinner} alt="loading" className="loading" />
          ) : (
            <ItemsList data={data} num_comments={num_comments} />
          )}
        </div>
      </div>
    );
  }
}
