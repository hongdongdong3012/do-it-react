import React from "react";
import PropTypes from "prop-types";

class Three extends React.Component {
  render() {
    const message = this.props.bored ? "놀러가자" : "하던 일이나 하자";
    return (
      <div>
        {message}
        {this.props.children}
      </div>
    );
  }
}
Three.propTypes = {
  children: PropTypes.node
};

export default Three;
