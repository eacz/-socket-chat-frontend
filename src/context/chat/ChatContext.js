import { createContext, useReducer } from "react";
import chatReducer from "./ChatReducer";

const ChatContext = createContext()

const initialState = {
  id: null, //logged user id
  activeChat: null, //user that you're currently chating with
  users: [], // list of (for now) all users in the database
  messages: [] //messages of the activeChat
}

const ChatProvider = ({children}) => {
  const [chat, dispatch] = useReducer(chatReducer, initialState)




  return (
    <ChatContext.Provider
      value={{
        chat,
        dispatch
      }}
    >
      {children}      
    </ChatContext.Provider>
  )
}

export default ChatProvider
