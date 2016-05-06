import React from 'react'
import { Messages } from '../../api/dataModels'

export default class Chatbox extends React.Component {

  onSubmit () {
    const message = document.getElementsByClassName('chatbox inline')
    Messages.insert({
      message,
      owner: Meteor.userId(),
      username: Meteor.user().username
    })
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea className='chatbox inline' type='text' placeholder='message here...' />
        <button className='chat-btn' type='button'>Q</button>
      </form>
    )
  }
}
