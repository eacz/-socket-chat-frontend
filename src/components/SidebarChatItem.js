import { useContext } from 'react'
import user_profile from '../assets/images/user-profile.png'
import { ChatContext } from '../context/chat/ChatContext'

const SidebarChatItem = ({user}) => {

  const { chat: { activeChat }, setActiveChat } = useContext(ChatContext)
  
  
  return (
  <div 
    className={`chat_list ${activeChat === user.id && 'active_chat'}`}
    onClick={() => setActiveChat(user.id)}
  >
      <div className='chat_people'>
        <div className='chat_img'>
          <img src={user_profile} alt='sunil' />
        </div>
        <div className='chat_ib'>
          <h5>{user.name} <span>@{user.username}</span></h5>
          {user.online 
            ? <span className='text-success'>Online</span> 
            : <span className='text-danger'>Offline</span>}
        </div>
      </div>
    </div>
  )
}

export default SidebarChatItem
