import { createContext, useCallback, useReducer } from "react";
import { SET_USERS } from "../../types/chatTypes";
import chatReducer from "./ChatReducer";

export const ChatContext = createContext()

const initialState = {
  id: null, //logged user id
  activeChat: null, //user that you're currently chating with
  users: [], // list of (for now) all users in the database
  messages: [] //messages of the activeChat
}

const ChatProvider = ({children}) => {
  const [chat, dispatch] = useReducer(chatReducer, initialState)

  const setUsers = useCallback((users) => dispatch({type: SET_USERS, payload: users }),
    [],
  )

  return (
    <ChatContext.Provider
      value={{
        chat,
        dispatch,
        setUsers
      }}
    >
      {children}      
    </ChatContext.Provider>
  )
}

export default ChatProvider
