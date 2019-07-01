import React, {Component} from 'react';
import {Icon} from "antd";

class ClassDetail extends Component {
    state = {
        classId: 0

    };

    componentDidMount() {
      this.setState({
          classId: this.props.location.state.classId
      })
    }

    addStudent() {
        this.props.history.push("/addStudent",{classId: this.state.classId})
    }

    render() {
        return (
            <div>
                <h1>班级详情</h1>

                <Icon onClick={this.addStudent.bind(this)} type="plus" style={{fontSize:"50px"}} />


            </div>
        );
    }
}

export default ClassDetail;
