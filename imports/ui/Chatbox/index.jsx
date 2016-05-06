import React from 'react'

export default class Chatbox extends React.Component {
  componentDidMount () {
    document.getElementsByClassName('chatbox')[0].addEventListener('keydown', (e) => {
      if (e.which === 13) {
        e.preventDefault()
        this.onSubmit()
      }
    })
  }

  onClick (e) {
    e.preventDefault()
    const el = e.target
    el.innerHTML = el.innerHTML === 'Chat with peers' ? 'Ask a question' : 'Chat with peers'
    el.className = el.className === 'chat-btn chat' ? 'chat-btn chat' : 'chat-btn question'
  }

  onSubmit () {
    //
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='container'>
          <textarea className='chatbox inline' type='text' placeholder='Chat here...' />
          <button
            onClick={this.onClick}
            className='chat-btn question'
            type='button'
          >
            Ask a question
          </button>
        </div>
      </form>
    )
  }
}
