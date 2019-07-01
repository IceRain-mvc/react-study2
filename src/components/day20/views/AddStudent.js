import React, {Component} from 'react';
import {Button} from "antd";

class AddStudent extends Component {

    state = {
        studentName: ""
    };
    render() {
        return (
            <div>
                <h1>添加学生</h1>

                <input type="text" value={this.state.studentName} onChange={(e)=>{

                    this.setState({
                        studentName:e.target.value
                    })
                }}/>

                <Button onClick={this.addStudent.bind(this)}>添加</Button>

            </div>
        );
    }

    addStudent() {
        /*
        * 存数据
        * */
        console.log(this.props.location.state.classId);


    }
}

export default AddStudent;
