import React, {Component} from 'react';
import List from "../components/List";
import filter from "../utils/filter"
import {connect} from "react-redux";

class Add extends Component {
    state = {
        value: "",
        arr: []
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => {
                    let value = e.target.value;
                    this.setState({value});
                    /*筛选*/
                    // this.props.saveFilterData(filter(this.props.allData, value));
                }}/>
                {/*{this.state.arr.map((item)=><div>{item.name}</div>)}*/}
                {/*1:*/}
                <List value={this.state.value}/>


            </div>
        );
    }
}

// export default Add;
let initMapStateToProps = (state) => {
    return {
        allData: state.allDataReducer
    }
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData: (fn) => {
            dispatch(fn);
        },
        saveFilterData: (arr) => {
            dispatch({type: "ADD_FILTER_DATA", arr});
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Add);
