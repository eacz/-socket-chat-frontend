import { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"
import { ChatContext } from "../context/chat/ChatContext"
import SidebarChatItem from "./SidebarChatItem"

const Sidebar = () => {
  const { chat: { users } } = useContext(ChatContext)
  const { auth: { id } } = useContext(AuthContext)

  return (
    <div className='inbox_chat'>
      {users
        .filter(user => user.id !== id)
        .map(user => (
        <SidebarChatItem user={user} key={user.id} />
      ))}
      <div className='extra_space'></div>
    </div>
  )
}

export default Sidebar
