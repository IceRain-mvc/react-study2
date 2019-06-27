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

let allFilterReducer = function (state =[], action) {
    switch (action.type) {
        case "ADD_FILTER_DATA":
            state = JSON.parse(JSON.stringify(action.arr));
            console.log(state);
            return [...state];

        default:
            return [...state]

    }

};


let reducers = combineReducers({
    allDataReducer,allFilterReducer
});


let store = createStore(reducers, applyMiddleware(thunk));

export default store;
