import user_profile from '../assets/images/user-profile.png'

const SidebarChatItem = ({user}) => {
  return (
    <div className='chat_list'>
      {/*active_chat*/}
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
