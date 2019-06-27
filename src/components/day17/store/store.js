import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";


let allDataReducer = function (state =[], action) {
    switch (action.type) {
        case "ADD_ALL_DATA":
            // state = action.data;
            state = JSON.parse(JSON.stringify(action.data));


            return [...state];
        default:
            return [...state]

    }

};


let reducers = combineReducers({
    allDataReducer
});


let store = createStore(reducers, applyMiddleware(thunk));

export default store;
