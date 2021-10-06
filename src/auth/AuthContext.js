import { createContext, useCallback, useState } from 'react'

export const AuthContext = createContext()

const initialState = {
  id: null,
  checking: true,
  logged: false,
  name: null,
  username: null,
  email: null,
}

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)

  const login = (email, password) => {}

  const register = (name, username, email, password) => {}

  const verifyToken = useCallback(() => {}, [])

  const logout = () => {}

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
