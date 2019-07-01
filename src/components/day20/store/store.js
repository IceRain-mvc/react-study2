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

        case "ADD_STUDENT":

            /*
            * 1:找到对用的班级
            * 2:push
            * 3:返回 push过的state
            *
            * */
            let classObj = state.filter((item, index) => {
                return item.id === action.studentObj.classId
            })[0];

            classObj.studentList.push(action.studentObj);

            state.forEach((item, index) => {
                if (item.id === action.studentObj.classId) {
                    state.splice(index, 1, classObj);
                }
            });

            /*
            * state [
            *
            *   {
            *       classId:1
            *       studentList:[
            *
            *           {
            *           }
            *       ]
            *
            *   },
            * ]
            *
            * */


            let addStudentState = JSON.parse(JSON.stringify(state));

            console.log(addStudentState);
            return [...addStudentState];
        default:
            return state;

    }

};


let reducers = combineReducers({allDataReducer});


let store = createStore(reducers, applyMiddleware(thunk));

export default store;
