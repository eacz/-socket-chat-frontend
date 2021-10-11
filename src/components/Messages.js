import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import SendMessage from './SendMessage'

const Messages = () => {
  const {chat: { messages }} = useContext(ChatContext)
  const {auth: { id }} = useContext(AuthContext)
  return (
    <div className='mesgs'>
      <div className='msg_history'>
        {messages.map((msg) => (msg.to === id ? <IncomingMessage message={msg} key={msg._id} /> : <OutgoingMessage message={msg} key={msg._id} />))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Messages
