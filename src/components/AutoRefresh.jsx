import React from "react";

export default class AutoRefresh extends React.Component {
  constructor() {
    super();
    this.state = {
      isAutoRefreshing: false
    };
  }

  intervalHandler = () => {
    console.log(this.state.isAutoRefreshing);
    let interval = setInterval(this.props.getData, 3000);
    if (!this.state.isAutoRefreshing) {
      clearInterval(interval);
    }
  };

  setAutoRefreshing = () => {
    this.setState(prevState => {
      return { isAutoRefreshing: !prevState.isAutoRefreshing };
    }, this.intervalHandler);
  };

  render() {
    const { isAutoRefreshing } = this.state;
    return (
      <button onClick={this.setAutoRefreshing} className="mb-2">
        {isAutoRefreshing ? "Stop auto-refreshing" : "Start auto-refreshing"}
      </button>
    );
  }
}
