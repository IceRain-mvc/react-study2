import React, {Component} from 'react';
import {Icon} from "antd";
import connect from "react-redux/es/connect/connect";

class ClassDetail extends Component {
    state = {
        classId: 0

    };

    // componentDidMount() {
    //   this.setState({
    //       classId: this.props.location.state.classId
    //   })
    // }

    addStudent() {
        this.props.history.push("/addStudent",{classId: this.props.location.state.classId})
    }

    render() {

        let {classId} = this.props.location.state;
        let {allData} = this.props;
        let classObj = allData.filter((item) => {
            return item.id === classId;
        })[0];
        return (
            <div>
                <h1>班级详情</h1>
                <ul>
                    {
                        classObj.studentList.map((item, index) => {
                            return <li key={item.studentId}
                                       style={{
                                           border: "1px solid #ccc",
                                           borderRadius: "4px",
                                           width: "30%"
                                       }}>
                                {item.studentName}
                            </li>
                        })
                    }
                </ul>

                <Icon onClick={this.addStudent.bind(this)} type="plus" style={{fontSize:"50px"}} />


            </div>
        );
    }
}

// export default ClassDetail;

let initMapStateToProps = (state) => {
    return {
        allData: state.allDataReducer
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        // addStudent: (studentObj) => {
        //     dispatch({type: "ADD_STUDENT", studentObj})
        // }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(ClassDetail);
