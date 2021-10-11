import {  createContext, useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "./chat/ChatContext";
import useSocket from "../hooks/useSocket";

export const SocketContext = createContext()

const SocketProvider = ({children}) => {

  const { online, socket, connectSocket, disconnectSocket } = useSocket(process.env.REACT_APP_BACKEND_URL)
  const {auth} = useContext(AuthContext)
  const { setUsers } = useContext(ChatContext)

  useEffect(() => {
    if(auth.logged){
      connectSocket()
    }
  }, [auth, connectSocket])

  useEffect(() => {
    if(!auth.logged){
      disconnectSocket()
    }
  }, [auth, disconnectSocket])

  useEffect(() => {
    socket?.on('users-list', (users) => {
      setUsers(users)
    })
  }, [socket, setUsers])

  return (
    <SocketContext.Provider
      value={{ online, socket }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider