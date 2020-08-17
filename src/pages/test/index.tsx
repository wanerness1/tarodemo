import React, { Component, useEffect } from 'react'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'
import { connect, useDispatch, useSelector } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import { changeName } from '../../actions/test'
import './index.less'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
}

const Test = () => {
  const name = useSelector((state: any) => state.test.name)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('1111')
  })
  return (
    <View className='test'>
      <View className='child'></View>
      <View className='child'></View>
      <Text>{name}</Text>
      <Button
        onClick={() => {
          dispatch(changeName())
        }}
      >
        change
      </Button>
    </View>
  )
}

export default Test
