import { SET_ACTIVE_CHAT, SET_USERS } from "../../types/chatTypes";

const chatReducer = (state, action) => {
  switch(action.type){
    case SET_USERS:
      return {...state, users: [...action.payload]}
    case SET_ACTIVE_CHAT:
      if(state.activeChat === action.payload) return state;

      return {...state, activeChat: action.payload, messages: []}
    default:
      return state;
  }
}

export default chatReducer