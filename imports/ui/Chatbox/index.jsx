import React from 'react'
import { Messages } from '../../api/dataModels.js'

export default class Chatbox extends React.Component {
  componentDidMount () {
    document.getElementsByClassName('chatbox')[0].addEventListener('keydown', (e) => {
      if (e.which === 13) {
        e.preventDefault()
        this.onSubmit()
      }
    })
  }

  onSubmit () {
    const message = document.getElementsByClassName('chatbox')[0]
    Messages.insert({
      message: message.value
    })
    message.value = ''
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='container'>
          <textarea className='chatbox inline' type='text' placeholder='message here...' />
          <button className='chat-btn question' type='button'>Q</button>
        </div>
      </form>
    )
  }
}
