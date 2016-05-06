import React from 'react'

export default class Chatbox extends React.Component {
  onSubmit () {
    //
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
