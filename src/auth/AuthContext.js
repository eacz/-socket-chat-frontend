import { createContext, useCallback, useState } from 'react'
import { fetchWithoutToken } from '../helpers/fetch'

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

  const login = async (email, password) => {
    const res = await fetchWithoutToken('login', { email, password }, 'POST')
    if (res.ok) {
      const {
        user: { id, email, name, username } } = res
      localStorage.setItem('token-sk', res.token)
      setAuth((auth) => ({
        ...auth,
        id, email, name, username,
        logged: true, checking: false,
      }))
      console.log('auth');
    }


    return res.ok;
  }

  const register = (name, username, email, password) => {}

  const verifyToken = useCallback(() => {}, [])

  const logout = () => {}

  return (
    <AuthContext.Provider
      value={{
        auth,
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
