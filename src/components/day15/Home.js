import React, {Component} from 'react';
import request from "./api/request";
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.saveFuYin(request);

                    // request()
                }}>异步请求</button>

                <h1>{this.props.obj.title}</h1>
                <img src={this.props.obj.pic} alt=""/>
            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        obj: state.reducerFuYin
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveFuYin:(fn)=>{
            dispatch(fn);
        }
    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Home);
