import React, { Component } from "react";

class SmallNavigationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSelect: false
    };
  }

  render() {
    const { openSelect } = this.state;
    return (
      <div className="smallnavigation">
        <a>Stores</a>
        <a>Login</a>
        <div
          className="smallnavigation__select"
          onClick={() => this.setState({ openSelect: !openSelect })}
        >
          <svg viewBox="0 0 16 10">
            <rect width="16" height="10" fill="#006aa7" />
            <rect width="2" height="10" x="5" fill="#fecc00" />
            <rect width="16" height="2" y="4" fill="#fecc00" />
          </svg>
          Sweden
          <div
            className={`smallnavigation__select-dropdown${
              openSelect ? " is-open" : ""
            }`}
          >
            <div className="smallnavigation__select-dropdown-item">
              <svg viewBox="0 0 16 10">
                <rect width="16" height="10" fill="#006aa7" />
                <rect width="2" height="10" x="5" fill="#fecc00" />
                <rect width="16" height="2" y="4" fill="#fecc00" />
              </svg>
              Sweden
            </div>
            <div className="smallnavigation__select-dropdown-item">
              <svg viewBox="0 0 1100 800">
                <rect width="1100" height="800" fill="#ef2b2d" />
                <rect width="200" height="800" x="300" fill="white" />
                <rect width="1100" height="200" y="300" fill="white" />
                <rect width="100" height="800" x="350" fill="#002868" />
                <rect width="1100" height="100" y="350" fill="#002868" />
              </svg>
              Norway
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallNavigationComponent;
