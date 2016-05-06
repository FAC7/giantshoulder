import React, { Component, PropTypes } from 'react';

export default class DocElement extends Component {
  render() {
    return (
      <li><h4><a href={this.props.doc.linkSrc} target='_blank'>{this.props.doc.linkTitle}</a></h4></li>
    );
  }
}

DocElement.propTypes = {
  doc: PropTypes.object.isRequired,
};
