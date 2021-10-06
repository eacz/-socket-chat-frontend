import { createContext, useCallback, useReducer } from 'react'
import { fetchWithoutToken } from '../helpers/fetch'
import { CLEAN_ERRORS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from '../types/authTypes'
import AuthReducer from './AuthReducer'

export const AuthContext = createContext()

const initialState = {
  id: null,
  checking: true,
  logged: false,
  name: null,
  username: null,
  email: null,
  errors: null,
  loading: false,
}

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(AuthReducer, initialState,)

  const login = async (email, password) => {
    dispatch({type: LOGIN_START })
    const res = await fetchWithoutToken('login', { email, password }, 'POST')
    if (res.ok) {
      const { user } = res
      localStorage.setItem('token-sk', res.token)
      dispatch({type: LOGIN_SUCCESS, payload: { user }})
    } else {
      dispatch({type: LOGIN_FAILED, payload: { errors: res.msg || res.errors }})      
    }
    return res.ok;
  }

  const register = (name, username, email, password) => {}

  const verifyToken = useCallback(() => {}, [])

  const logout = () => {}

  const cleanErrors = () => {
    dispatch({type: CLEAN_ERRORS})
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verifyToken,
        logout,
        cleanErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
