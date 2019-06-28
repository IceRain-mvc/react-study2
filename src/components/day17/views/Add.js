import React, {Component} from 'react';
import List from "../components/List";
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
                }}/>

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
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Add);
