import { useCallback, useEffect, useState } from "react"
import io from "socket.io-client";
import { getToken } from "../helpers/token-storage";

const useSocket = (serverPath) => {
  //const socket = useMemo(() => io(serverPath, { transports: [ 'websocket'] }), [serverPath])
  const [socket, setSocket] = useState(null)
  const [online, setOnline] = useState(false)
  const token = getToken()

  const connectSocket = useCallback(() => {
    const socketTemp = io(serverPath, { 
      transports: [ 'websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'token-sk':token
      }
    })
    setSocket(socketTemp)
  }, [serverPath])

  const disconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    setOnline(socket?.connected)
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => {
      setOnline(true)
     //return socket.disconnect()
    })
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])
  
  
  return {
    socket,
    online,
    connectSocket,
    disconnectSocket
  }
}

export default useSocket