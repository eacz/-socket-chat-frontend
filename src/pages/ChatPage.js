import ChatSelect from '../components/ChatSelect'
import InboxPeople from '../components/InboxPeople'
import Messages from '../components/Messages'
import '../css/chat.css'

const ChatPage = () => {
  return (
    <div className='messaging'>
      <div className='inbox_msg'>
        <InboxPeople />
        
        {
          //temporary
          false ?<Messages /> :<ChatSelect />
        }
      </div>
    </div>
  )
}

export default ChatPage
