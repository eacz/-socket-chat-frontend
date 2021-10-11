import moment from 'moment';
const formatMessageDate = (date) => {
  const dateM = moment(date)
  return dateM.format('HH:mm a | MMMM Do')
}

export default  formatMessageDate;