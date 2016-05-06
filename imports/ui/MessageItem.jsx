import React, {Component} from 'react'
import dateConverter from '../../utils/dateConverter.js'

const styles = {
  li: {
    //
  },
  date: {
    width: '20%',
    fontWeight: 'bold'
  },
  sender: {
    width: '10%',
    fontFamily: 'italics'
  },
  msgBody: {
    width: '70%',
  },
}

export default class MessagesItem extends Component {
  render () {
    return (
      <li style={styles.li} key={this.props.message.id}>
        <span style={styles.date}>{dateConverter(this.props.message.createdAt)}</span>
        <span style={styles.sender}>{this.props.message.sender}</span>
        <span style={styles.msgBody}>{this.props.message.body}</span>
      </li>
    )
  }
}

MessagesItem.propTypes = {
  message: React.PropTypes.object.isRequired
}
