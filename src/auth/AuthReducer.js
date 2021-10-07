import { CLEAN_ERRORS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_START, REGISTER_SUCCESS } from '../types/authTypes'

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_START:
    case LOGIN_START:
      return { ...state, loading: true }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      const { email, username, name, id} = action.payload.user
      return {
        ...state,
        id,
        name,
        email,
        username,
        loading: false,
        checking: false,
        logged: true,
        errors: null,
      }
    case REGISTER_FAILED:
    case LOGIN_FAILED: 
      return {...state, errors: action.payload.errors, loading: false}
    case CLEAN_ERRORS:
      return {...state, errors: null}
    default:
      return state
  }
}

export default AuthReducer
