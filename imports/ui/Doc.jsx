import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { Docs } from '../api/docs.js'

export default class Doc extends Component {
  handleClick(event) {
    event.preventDefault()

    const linkTitle = ReactDOM.findDOMNode(this.refs.titleInput).value.trim()
    const linkSrc = ReactDOM.findDOMNode(this.refs.linkInput).value.trim()

    Docs.insert({
      linkSrc,
      linkTitle
    })

    ReactDom.findDOMNode(this.refs.titleInput).value = ''
    ReactDom.findDOMNode(this.refs.linkInput).value = ''
  }

  renderTasks() {
    return this.props.docs.map((doc) => (
      <Doc key={doc._id} doc={doc} />
    ))
  }

  render () {
    return (
      <div>
        <h3>Docs</h3>
        <ul>
          {[
            {
              linkSrc: 'https://docs.google.com/document/d/13SA4cPWhSp8w39zi7_peXY3id8GvlnzkFa_w44hTYfg/edit',
              linkTitle: 'link 1'
            }
          ].map(link =>
            <li><a href={link.linkSrc} target='_blank'>{link.linkTitle}</a></li>
          )}
        </ul>
        <h3>New Doc</h3>
        <input type='text' ref='titleInput' placeholder='Title'/>
        <input type='text' ref='linkInput' placeholder='Link'/>
        <button onClick={this.props.handleClick}>+</button>
      </div>
    )
  }
}
