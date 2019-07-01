import React, {Component} from 'react';
import {Button} from "antd";
import connect from "react-redux/es/connect/connect";

let classId = 0;

class CreateClass extends Component {

    state = {
        className: ""
    };

    render() {
        return (
            <div>
                <h1>创建班级</h1>

                <input type="text" value={this.state.className} onChange={(e) => {

                    this.setState({
                        className: e.target.value
                    })
                }}/>

                <Button type="primary" onClick={this.createClass.bind(this)}>完成创建</Button>
            </div>
        );
    }

    createClass() {
        /*
        * 1:跳转路由
        * 2:班级存到仓库
        *
        * */


        classId++;

        let classObj = {
            id: classId,
            className: this.state.className,
            studentList: []
        };

        this.props.addClassRoom(classObj);

        this.props.history.push("/classDetail", {classId: classId});

    }
}


let initMapStateToProps = (state) => {
    return {}
};
let initMapDispatchToProps = (dispatch) => {
    return {
        addClassRoom: (classObj) => {
            dispatch({type: "ADD_CLASS", classObj})
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(CreateClass);
