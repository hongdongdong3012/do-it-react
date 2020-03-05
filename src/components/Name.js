import React, { Component } from "react";
import PropTypes from "prop-types";

class Name extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

Name.propTypes = {
  name: PropTypes.string
};

Name.defaultProps = {
  name: "지정 안함"
};
export default Name;
