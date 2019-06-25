import {createStore,combineReducers} from "redux";


let reducer1 = (state = [], action) => {


    switch (action.type) {
        case "ADD_LIST":
            // state = action.list;
            state.push(action.data);
            return [...state];
        default:
            return [...state];

    }
};

let reducers = combineReducers({

    reducer1
});

export default createStore(reducers);
