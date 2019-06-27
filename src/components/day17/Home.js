import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Page from "./views/Page";
import ZiXuan from "./views/ZiXuan";
import Add from "./views/Add";
// import {Switch} from "antd";

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/page" component={Page}/>
                    <Route path="/zixuan" component={ZiXuan}/>
                    <Route path="/add" component={Add}/>
                    <Redirect from="/" to="/zixuan"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Home;
