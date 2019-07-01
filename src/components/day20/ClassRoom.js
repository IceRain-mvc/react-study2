import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import CreateClass from "./views/CreateClass";
import ClassDetail from "./views/ClassDetail";
import AddStudent from "./views/AddStudent";
import StudentDetail from "./views/StudentDetail";
import ClassManager from "./views/ClassManager";

class ClassRoom extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/createClass" component={CreateClass}/>
                    <Route path="/classDetail" component={ClassDetail}/>
                    <Route path="/addStudent" component={AddStudent}/>
                    <Route path="/studentDetail" component={StudentDetail}/>
                    <Route path="/classManager" component={ClassManager}/>

                    <Redirect from="/" to="/createClass"/>

                </Switch>

            </BrowserRouter>
        );
    }
}

export default ClassRoom;
