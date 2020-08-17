import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { Provider } from "@tarojs/redux";

import configStore from './store';

import './app.less';

const store = configStore();

class App extends Component {
  componentDidMount() {
    console.log('env', process.env.NODE_ENV); //获取环境变量
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
