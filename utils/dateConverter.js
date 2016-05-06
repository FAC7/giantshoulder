const dateConverter = (ISODate) => {
  // "2016-05-06T10:04:05.101Z"
  const unformattedDate = ISODate.split('T')[0].split('-')
  const unformattedTime = ISODate.split('T')[1].split('.')[0].split(':')
  // const YY = unformattedDate[0]
  const MM = unformattedDate[1]
  const DD = unformattedDate[2]
  const H = unformattedTime[0]
  const M = unformattedTime[1]
  // const S = unformattedTime[2]
  return `${DD}/${MM} @ ${H}:${M}`
}

module.exports = dateConverter
