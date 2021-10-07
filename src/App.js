import AuthProvider from './auth/AuthContext'
import SocketProvider from './context/SocketContext'
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  )
}

export default App
