import React from "react";

export default class AutoRefresh extends React.Component {
  constructor() {
    super();
    this.state = {
      isAutoRefreshing: false
    };
  }

  intervalHandler = () => {
    if (this.state.isAutoRefreshing) {
      this.interval = setInterval(this.props.getData, 3000);
    } else {
      clearInterval(this.interval);
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
