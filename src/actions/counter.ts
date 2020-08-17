import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  return async (dispatch,getState) => {
    await new Promise((res,rej)=>{
      setTimeout(() => {
        console.log(11111111,getState());
        res()
        
      }, 2000)
    }) 
    dispatch(add())
  }
}
