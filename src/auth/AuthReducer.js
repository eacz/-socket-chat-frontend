import {
  CLEAN_ERRORS,
  RENEW_SUCCESS,
  RENEW_FAILED,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGOUT,
} from '../types/authTypes'

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
      return { ...state, loading: true }
    case RENEW_SUCCESS:
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      const { email, username, name, id } = action.payload.user
      return {
        ...state,
        id,
        name,
        email,
        username,
        checking: false,
        loading: false,
        logged: true,
        errors: null,
      }
    case REGISTER_FAILED:
    case LOGIN_FAILED:
      return { ...state, errors: action.payload.errors, loading: false, checking: false }
    case CLEAN_ERRORS:
      return { ...state, errors: null }
    case RENEW_FAILED:
      return { ...state, checking: false }
    case LOGOUT:
      return {
        ...state,
        id: null,
        checking: false,
        logged: false,
        name: null,
        username: null,
        email: null,
        errors: null,
        loading: false,
      }
    default:
      return state
  }
}

export default AuthReducer
