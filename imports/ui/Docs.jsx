import React, { Component } from 'react'

export default class Docs extends Component {
  render() {
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
        <button>+</button>
      </div>
    )
  }
}
