import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 虚拟Dom -->转到 真实DOM  diff算法
ReactDOM.render(<App />, document.getElementById('root'),()=>{
    console.log("渲染完成")
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
