import React, {Component} from 'react';
import {Button} from "antd";
import connect from "react-redux/es/connect/connect";

class AddStudent extends Component {

    state = {
        studentName: ""
    };


    toStudentDetail(item) {
        this.props.history.push("/studentDetail",{...item})

    }

    render() {
        let {classId} = this.props.location.state;
        let {allData} = this.props;
        let classObj = allData.filter((item) => {
            return item.id === classId;
        })[0];

        return (
            <div>
                <h1>添加学生</h1>

                <input type="text" value={this.state.studentName} onChange={(e) => {

                    this.setState({
                        studentName: e.target.value
                    })
                }}/>

                <Button onClick={this.addStudent.bind(this)}>添加</Button>

                <ul>
                    {
                        classObj.studentList.map((item, index) => {
                            return <li key={item.studentId}
                                       onClick={this.toStudentDetail.bind(this,item)}
                                       style={{
                                           border: "1px solid #ccc",
                                           borderRadius: "4px",
                                           width: "30%"
                                       }}>
                                {item.studentName}
                            </li>;
                        })
                    }
                </ul>

            </div>
        );
    }

    addStudent() {

        let {classId} = this.props.location.state

        /*
        * 存数据
        * */
        console.log(this.props.location.state.classId);

        /*
        * obj --> 仓库
        *
        * { classId:,学生姓名:  学生id}
        * */
        let {studentName} = this.state;

        studentId++;

        let studentObj = {
            studentName, classId, studentId
        };
        /*
        * 接下来:存到仓库
        * */

        this.props.addStudent(studentObj);

    }
}

let studentId = 0;

let initMapStateToProps = (state) => {
    return {
        allData: state.allDataReducer
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        addStudent: (studentObj) => {
            dispatch({type: "ADD_STUDENT", studentObj})
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(AddStudent);
