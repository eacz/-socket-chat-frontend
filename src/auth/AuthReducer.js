import { CLEAN_ERRORS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from '../types/authTypes'

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true }
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
    case LOGIN_FAILED: 
      return {...state, errors: action.payload.errors}
    case CLEAN_ERRORS:
      return {...state, errors: null}
    default:
      return state
  }
}

export default AuthReducer
