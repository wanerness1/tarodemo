import Taro from "@tarojs/taro";
import { CHAGNE } from "../constants/test";
// 异步的action
export function changeName() {
  return async (dispatch, getState) => {
    console.log(22222, getState());

    // await Taro.request({
    //     url:'https://developer.mozilla.org/api/v1/whoami',
    //     method:'GET',
    //     dataType:"json",
    //     header: {
    //       'content-type': 'application/json'
    //     }
    //   }).then(
    //     res=>{
    //         console.log(res)
    //     }
    // )

    //mock request
    const name = await new Promise((res) => {
      setTimeout(() => {
        res("waner");
      }, 2000);
    });

    dispatch({
      type: CHAGNE,
      payload: name,
    });
  };
}
