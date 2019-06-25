/*
* 1  :  下载
* */

/*
* 2: : 创建仓库
* */

import {createStore, combineReducers} from "redux";
import userReducer from "./reducer/userReducer";
import listReducer from "./reducer/listReducer";
/*
* 3:创建reducer
*
* 1: 代码混乱 引进来
* 2: 初值
* */


let reducers = combineReducers({
    userReducer,
    listReducer
});

let store = createStore(reducers);
window.store = store;
export default store;
