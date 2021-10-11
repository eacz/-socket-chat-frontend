import formatMessageDate from "../helpers/formatMessageDate"

const OutgoingMessage = ({message}) => {
  return (
    <div className='outgoing_msg'>
      <div className='sent_msg'>
        <p>{message.message}</p>
        <span className='time_date'>{formatMessageDate(message.createdAt)}</span>
      </div>
    </div>
  )
}

export default OutgoingMessage
