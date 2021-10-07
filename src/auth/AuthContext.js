import { createContext, useCallback, useReducer } from 'react'
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch'
import { getToken, removeToken, setToken } from '../helpers/token-storage'
import {
  CLEAN_ERRORS,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  RENEW_FAILED,
  RENEW_SUCCESS,
} from '../types/authTypes'
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
  const [auth, dispatch] = useReducer(AuthReducer, initialState)

  const login = async (email, password) => {
    dispatch({ type: LOGIN_START })
    const res = await fetchWithoutToken('login', { email, password }, 'POST')
    if (res.ok) {
      const { user, token } = res
      setToken(token)
      dispatch({ type: LOGIN_SUCCESS, payload: { user } })
    } else {
      dispatch({ type: LOGIN_FAILED, payload: { errors: res.msg || res.errors } })
    }
    return res.ok
  }

  const register = async (name, username, email, password) => {
    dispatch({ type: REGISTER_START })
    const res = await fetchWithoutToken('login/new', { name, username, email, password }, 'POST')
    if (res.ok) {
      const { user, token } = res
      setToken(token)
      dispatch({ type: REGISTER_SUCCESS, payload: { user } })
    } else {
      dispatch({ type: REGISTER_FAILED, payload: { errors: res.msg || res.errors } })
    }
    return res.ok
  }

  const verifyToken = useCallback(async () => {
    const token = getToken()
    if(!token){
      return dispatch({ type: RENEW_FAILED })
    }
    
    const res = await fetchWithToken('login/renew')
    if(res.ok){
      const {user, token} = res
      setToken(token);
      dispatch({ type: RENEW_SUCCESS, payload: { user } })
    } else {
      dispatch({ type: RENEW_FAILED })
      removeToken()
    }
  }, [])

  const logout = () => {
    removeToken()
    dispatch({type: LOGOUT})
  }

  const cleanErrors = () => {
    dispatch({ type: CLEAN_ERRORS })
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
