import React, {Component} from 'react';
import Detail from "./component/Detail";
import List from "./component/List";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {request} from "../api/request";

class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <Detail/>
                <List/>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        this.props.saveAllData(request);
    }
}




let initMapStateToProps = (state) => {
    return {}
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData:(fn)=>{
            dispatch(fn);
        }

    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Index);
