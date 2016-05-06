import React, {Component} from 'react'

const styles = {
  messagesView: {
    width: '100%'
  }
}

export default class MessagesView extends Component {
  constructor() {
    super()
      this.state = {
        currentView: 'questions'
      }
  }
  render () {
    return (
      <div style={styles.messagesView}>
        <ul className="nav nav-tabs">
          <li role="question" className={this.state.currentView === 'questions' ? 'active' : ''}>
            <a href="#" onClick={() => this.setState({currentView: 'questions'})}>Questions</a></li>
          <li role="chat" className={this.state.currentView === 'chat' ? 'active' : ''}>
            <a href="#" onClick={() => this.setState({currentView: 'chat'})}>Chat</a></li>
        </ul>
        <h1>Component goes here</h1>
      </div>
    )
  }
}

MessagesView.propTypes = {

}
