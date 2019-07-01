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
                    result && result.map((item, index) => {

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
        if (this.props.questions) {
            let questions = this.props.questions.questions;
            let chooseList = this.props.chooseList;
            questions.forEach((item, index) => {
                let inChoose = false;
                chooseList.forEach((t, ind) => {
                    if (item.id === t.questionId) {
                        inChoose = true;
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
                    }
                })

                if (!inChoose) {
                    this.newResult.push({index: (index + 1), result: undefined})

                }
            });
            this.setState({
                result: this.newResult
            })
        }
    }
}

let initMapStateToProps = (state) => {
    return {
        questions: state.allDataReducer[0],
        chooseList: state.chooseReducer
    }
};

export default connect(initMapStateToProps)(Look);
