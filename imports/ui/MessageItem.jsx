import React, {Component} from 'react'
import dateConverter from '../../utils/dateConverter.js'

const styles = {
  li: {
    listStyleType: 'none'
  },
  date: {
    fontWeight: 'bold',
  },
  sender: {
    fontFamily: 'italics'
  },
  msgBody: {
    width: '70%',
  },
  separator: {
    // borderBottom: '0.5px solid grey',
    height: '2vh',
  }
}

const widths = {
  date: {
    md: '3',
    xs: '2',
    sm: '2'
  },
  sender: {
    md: '3',
    xs: '2',
    sm: '2'
  },
  body:  {
    md: '6',
    xs: '6',
    sm: '6'
  },
}

export default class MessagesItem extends Component {
  render () {
    return (
      <li style={styles.li} key={this.props.message.id}>
        <span
          className={`col-md-${widths.date.md} col-md-${widths.date.xs} col-md-${widths.date.sm}`}
          style={styles.date}>
          {dateConverter(this.props.message.createdAt)}
        </span>
        <span
          className={`col-md-${widths.sender.md} col-md-${widths.sender.xs} col-md-${widths.sender.sm}`}
          style={styles.sender}>
          {this.props.message.sender}
        </span>
        <span
          className={`col-md-${widths.body.md} col-md-${widths.body.xs} col-md-${widths.body.sm}`}
          style={styles.msgBody}>
          {this.props.message.body}
        </span>
        <div style={styles.separator}></div>
      </li>
    )
  }
}

MessagesItem.propTypes = {
  message: React.PropTypes.object.isRequired
}
