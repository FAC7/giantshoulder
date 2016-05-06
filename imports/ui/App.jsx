import React from 'react'
import Doc from './Doc.jsx'
import MessagesView from './MessagesView.jsx'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Doc />
        <MessagesView />
      </div>
    )
  }
}
