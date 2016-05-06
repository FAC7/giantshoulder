import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'

import { Docs } from '../api/docs.js'
import DocElement from './DocElement.jsx'

export default class Doc extends Component {
  handleClick(event) {
    event.preventDefault()

    const linkTitle = ReactDOM.findDOMNode(this.refs.titleInput).value.trim()
    const linkSrc = ReactDOM.findDOMNode(this.refs.linkInput).value.trim()

    Docs.insert({
      linkSrc,
      linkTitle
    })

    ReactDOM.findDOMNode(this.refs.titleInput).value = ''
    ReactDOM.findDOMNode(this.refs.linkInput).value = ''
  }

  renderDocs() {
    return this.props.docs.map((doc) => (
      <DocElement key={doc._id} doc={doc} />
    ))
  }

  render () {
    return (
      <div className="container">
        <header>
        <h2>Docs</h2>
        <ul>
        {this.renderDocs()}
        </ul>

          <h2>New Doc</h2>
          <form className="new-task" onSubmit={this.handleClick.bind(this)} >
            <input type='text' ref='titleInput' placeholder='Title'/>
            <input type='text' ref='linkInput' placeholder='Link'/>
            <button onClick={this.props.handleClick}>Add Document</button>
          </form>
        </header>

      </div>
    )
  }
}

Doc.propTypes = {
  docs: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
      docs: Docs.find({}).fetch()
    };
}, Doc);
