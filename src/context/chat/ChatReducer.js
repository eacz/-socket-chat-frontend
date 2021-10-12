import { LOGOUT, NEW_MESSAGE, SET_ACTIVE_CHAT, SET_MESSAGES, SET_USERS } from "../../types/chatTypes";

const chatReducer = (state, action) => {
  switch(action.type){
    case SET_USERS:
      return {...state, users: [...action.payload]}
    case SET_ACTIVE_CHAT:
      if(state.activeChat === action.payload) return state;

      return {...state, activeChat: action.payload, messages: []}
    case NEW_MESSAGE:
      if(state.activeChat === action.payload.from || state.activeChat === action.payload.to){
        return {...state, messages: [...state.messages, action.payload]}
      } else {
        return state
      }
    case SET_MESSAGES:
      return {...state, messages: action.payload}
    case LOGOUT:
      return {
        ...state,
        id: null,
        activeChat: null,
        users: [],
        messages: [],
      }
    default:
      return state;
  }
}

export default chatReducer