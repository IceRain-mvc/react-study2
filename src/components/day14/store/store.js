import {createStore, combineReducers, applyMiddleware} from "redux";

/*1:引入中间件 : thunk 作用 执行异步action*/
import thunk from "redux-thunk"
/*2: applyMiddleware*/


/*
* applyMiddleware:作用:改造 dispatch
*
* dispatch({type:"",aaa})
*
* looger:打印日志
* thunk:异步action
* promise:异步:
* saga:
*
* dispatch(fn):异步action
*
* */

let addReducer = function (state = [], action) {
    switch (action.type) {
        case "ADD":
            state.push(action.obj);
            // console.log(state);
            return [...state];
        case "ADD_LIST":
            state = action.response;
            console.log(state);
            // console.log(state);
            return [...state];
        default:
            return [...state];
    }

};
/*获取收入和支出的差值*/
let totalReducer = function (state = 0, action) {
    switch (action.type) {
        case "TOTAL":
            state = action.total;
            //不能做业务逻辑的操作

            return state;
        default:
            return state;
    }

};

let reducers = combineReducers({
    addReducer, totalReducer
});

/*3: applyMiddleware 放到第二个参数里面*/
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store
