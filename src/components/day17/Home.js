import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Page from "./views/Page";
import ZiXuan from "./views/ZiXuan";
import Add from "./views/Add";
// import {Switch} from "antd";
import request from "./request";
import {connect} from "react-redux";

class Home extends Component {


    componentDidMount() {
        // request();//异步
        this.props.saveAllData(request);

    }
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

let initMapStateToProps = (state) => {
    return {}
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData: (fn) => {
            dispatch(fn);
        }
    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Home);
