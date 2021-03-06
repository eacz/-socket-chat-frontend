import { useContext } from 'react'
import ChatSelect from '../components/ChatSelect'
import InboxPeople from '../components/InboxPeople'
import Messages from '../components/Messages'
import { ChatContext } from '../context/chat/ChatContext'
import '../css/chat.css'

const ChatPage = () => {
  const {chat: { activeChat }} = useContext(ChatContext)
  return (
    <div className='messaging'>
      <div className='inbox_msg'>
        <InboxPeople />
        
        {
          activeChat ? <Messages /> :<ChatSelect />
        }
      </div>
    </div>
  )
}

export default ChatPage
