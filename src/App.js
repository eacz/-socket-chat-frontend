import AuthProvider from './auth/AuthContext'
import ChatProvider from './context/chat/ChatContext'
import SocketProvider from './context/SocketContext'
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
}

export default App
