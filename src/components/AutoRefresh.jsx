import React from "react";

export default class AutoRefresh extends React.Component {
  constructor() {
    super();
    this.state = {
      isAutoRefreshing: false
    };
  }

  setAutoRefreshing = () => {
    this.setState(prevState => {
      return { isAutoRefreshing: !prevState.isAutoRefreshing };
    });

    let interval = setInterval(this.props.getData, 3000);

    if (!this.state.isAutoRefreshing) {
      clearInterval(interval);
    }
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
