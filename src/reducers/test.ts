import { CHAGNE } from '../constants/test'

const INITIAL_STATE = {
  name: 'q'
}

export default function test (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHAGNE:
      return {
        ...state,
        name: action.payload
      }
    
     default:
       return state
  }
}
