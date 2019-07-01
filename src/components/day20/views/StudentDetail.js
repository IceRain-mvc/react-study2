import React, {Component} from 'react';

class StudentDetail extends Component {
    render() {
        let {studentName, classId, studentId} = this.props.location.state;
        return (
            <div>
                <h1>学生详情</h1>

                <h2>班级:{classId}</h2>
                <h2>学号:{studentId}</h2>
                <h2>姓名:{studentName}</h2>
            </div>
        );
    }
}

export default StudentDetail;
