import { useContext, useState } from "react"
import { AuthContext } from "../auth/AuthContext"
import { ChatContext } from "../context/chat/ChatContext"
import { SocketContext } from "../context/SocketContext"

const SendMessage = () => {
  const [message, setMessage] = useState('')
  const { socket } = useContext(SocketContext)
  const { auth: {id} } = useContext(AuthContext)
  const {chat: { activeChat }} = useContext(ChatContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(message.length === 0 ) return;
    //TODO: dispatch new message
    setMessage('')
    socket.emit('personal-message', {
      to: activeChat,
      from: id,
      message
    })
  }
  return (
    <form onSubmit={handleSubmit} >
      <div className='type_msg row'>
        <div className='input_msg_write col-sm-9'>
          <input value={message} onChange={e => setMessage(e.target.value)} type='text' className='write_msg' placeholder='Message...' />
        </div>
        <div className='col-sm-3 text-center'>
          <button className='msg_send_btn mt-3' type='submit'>
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default SendMessage
