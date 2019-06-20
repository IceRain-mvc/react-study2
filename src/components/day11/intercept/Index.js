import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import Page from "../views/Page";
import Me from "../views/Me";
import HomeDetail from "../views/HomeDetail";
import PageDetail from "../views/PageDetail";
import MeDetail from "../views/MeDetail";

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/page" component={Page}/>
                    <Route path="/me" component={Me}/>
                    <Route path="/homeDetail" component={HomeDetail}/>
                    <Route path="/pageDetail" component={PageDetail}/>
                    <Route path="/meDetail" component={MeDetail}/>
                    <Route path="/login" component={Login}/>
                    <Redirect from={"/"} to={"/home"}/>
                </Switch>
            </Router>
        );
    }
}

export default Index;
