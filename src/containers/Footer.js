/*
    Container for fetching all links to FooterComponent
*/

import React, { Component } from "react";
import api from "../utils/api";
import FooterComponent from "../components/footer/FooterComponent";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    api.getLinks().then(links => this.setState({ links }));
  }

  render() {
    const { links } = this.state;

    return <FooterComponent links={links} />;
  }
}

export default Footer;
