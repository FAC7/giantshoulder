import React, {Component} from 'react'

import MessagesList from './MessagesList.jsx'

const styles = {
  messagesView: {
    width: '100%'
  },
  listView: {

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
        <MessagesList currentView={this.state.currentView} />
      </div>
    )
  }
}

MessagesView.propTypes = {

}
