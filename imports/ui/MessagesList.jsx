import React, {Component} from 'react'

import MessageItem from './MessageItem.jsx'

const styles = {
  messagesView: {
    width: '100%'
  },
  chatMsg: {
    //
  },
  question: {
    //
  }
}

const questions = [
  {
    id: '1232134',
    sender: 'student3',
    createdAt: '2018-05-06T10:04:05.101Z',
    body: 'can i ask a question?'
  },
  {
    id: '1232135',
    sender: 'student4',
    createdAt: '2016-05-06T10:04:05.101Z',
    body: 'can you not ask a question???'
  }
]

const chat = [
  {
    id: '1232134',
    sender: 'student1',
    createdAt: '2017-05-06T10:04:05.101Z',
    body: 'fdfhsjfhsdkjthreskrhkseht'
  },
  {
    id: '1232135',
    sender: 'student2',
    createdAt: '2016-05-06T10:04:05.101Z',
    body: 'jfhdjhrariaeurioauio'
  }
]

export default (props) => {
  return (
    <div>
      <ul>
        {
          props.currentView === 'questions'
          ? questions.map(question => {
            return (
              <MessageItem message={question} style={styles.chat} />
            )
          })
          : chat.map(chatMsg => {
            return (
              <MessageItem message={chatMsg} style={styles.chatMsg} />
            )
          })
        }
      </ul>
    </div>
  )
}
