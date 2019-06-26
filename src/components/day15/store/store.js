import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk";


let reducerFuYin = function (state = {}, action) {
    switch (action.type) {
        case "ADD_OBJ":
            state = action.data;
            return {...state};
        default:
            return {...state};
    }
};

let reducerItem = function (state = {}, action) {
    switch (action.type) {
        case "ADD_ITEM":
            state = action.obj;
            return {...state};
        default:
            return {...state};

    }
};


let reducers = combineReducers({reducerFuYin, reducerItem});


let store = createStore(reducers, applyMiddleware(thunk));
export default store;


// let next = store.dispatch;
//
// store.dispatch = function (fn) {
//
//     fn&&fn(next)
// };
