
/*
* 创建仓库
* */
import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";


let allDataReducer = function (state = [], action) {

    switch (action.type) {

        case "ADD_CLASS":
            state.push(action.classObj);
            let createClassState = JSON.parse(JSON.stringify(state));
            console.log(createClassState);
            return [...createClassState];
        default:
            return state;

    }

};


let reducers = combineReducers({allDataReducer});


let store = createStore(reducers, applyMiddleware(thunk));

export default store;
