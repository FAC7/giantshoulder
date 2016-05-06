import React from 'react'

export default class Chatbox extends React.Component {
  componentDidMount () {
    document.getElementsByClassName('chatbox')[0].addEventListener('keydown', (e) => {
      if (e.which === 13) e.preventDefault()
    })
  }

  onSubmit () {
    //
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
