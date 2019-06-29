import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Page from "./views/Page";
import Answer from "./views/Answer";
import Look from "./views/Look";
import Result from "./views/Result";
import {connect} from "react-redux";
import request from "./api/request";

class Test extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/page" component={Page}/>
                    <Route path="/answer" component={Answer}/>
                    <Route path="/look" component={Look}/>
                    <Route path="/result" component={Result}/>
                    <Redirect from="/" to="/page"/>
                </Switch>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        this.props.saveAllData(request("http://192.168.15.2:3000/result"));
    }
}

let initMapStateToProps = (state) => {
    return {}
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData:(fn)=>{
            dispatch(fn)
        }
    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Test);
