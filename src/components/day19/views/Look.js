import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Look extends Component {


    constructor(props) {
        super(props);
        this.newResult = [];
        this.state = {
            result: []
        };
    }


    render() {
        let {result} = this.state;
        // console.log(this.newResult);
        return (
            <div>
                {
                    result.map((item, index) => {

                        return <div key={index}>
                            {item.result && <h2>对</h2>}
                            {item.result === false && <h2>错</h2>}
                            {typeof item.result === "undefined" && <h2>没做</h2>}
                        </div>;
                    })
                }

            </div>
        );
    }

    componentDidMount() {
        let questions = this.props.questions;
        let chooseList = this.props.chooseList;
        questions.forEach((item, index) => {
            chooseList.forEach((t, ind) => {
                if (item.id === t.questionId) {
                    if (item.answer.toUpperCase() === t.order.toUpperCase()) {
                        /*
                        * 此题答对了
                        * */
                        // console.log("第" + (ind + 1) + "题答对了")
                        this.newResult.push({index: (ind + 1), result: true})
                    } else {
                        /*
                        * 打错了
                        * */
                        // console.log("第" + (ind + 1) + "题答错了")
                        this.newResult.push({index: (ind + 1), result: false})
                    }
                } else {
                    this.newResult.push({index: (ind + 1), result: undefined, isAnswer: false})
                }
            })
        });
        this.setState({
            result: this.newResult
        })
    }
}

let initMapStateToProps = (state) => {
    return {
        questions: state.allDataReducer[0].questions,
        chooseList: state.chooseReducer
    }
};

export default connect(initMapStateToProps)(Look);
