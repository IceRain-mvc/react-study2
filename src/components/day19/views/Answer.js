import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import "./Answer.css";

class Answer extends Component {
    state = {
        index: 0
    };

    componentWillReceiveProps() {
        let {index} = this.props.location.state;
        this.setState({
            index
        })
    }

    changeIndex(item) {

        setTimeout(()=>{

            let index = this.state.index;
            index++;
            if (index === this.props.qTypeQsObj1.questions.length) {
                return
            }

            /*
            * 存数据:
            * */

            this.setState({
                index
            });

            let obj = {
                id: item.id,
                order: item.order,
                questionId:item.questionId
            };

            this.props.saveChooseData(obj);

        },100)


    }

    render() {
        let {qTypeQsObj1} = this.props;
        let {index} = this.state;
        /*题的下标*/
        /*
        * 1:开始答题   index:0   this.props.xxx
        * 2:点击选项   index+1   state
        * 3:答题卡     index: 点哪一个 就是哪一个
        *
        * */
        return (
            <div>
                {
                    qTypeQsObj1 && <h1>{qTypeQsObj1.title}</h1>
                }

                <hr/>
                {/*标题*/}

                <h2>第{parseInt(index + 1)}题</h2>
                {

                    qTypeQsObj1 && <h2 dangerouslySetInnerHTML={{__html: qTypeQsObj1.questions[index].title}}/>

                }

                {

                    qTypeQsObj1 && qTypeQsObj1.questions[index].questionChoices.map((item, index) => {
                        return <li key={item.id}
                                   className="choose_item"
                                   onClick={this.changeIndex.bind(this,item)}
                                   style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                            <div style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px",
                                textAlign: "center",
                                lineHeight: "50px",
                                verticalAlign: "middle",
                                margin: "10px",
                                border: "1px solid #ccc",
                                flex: 1,
                                position: "pointer"
                            }}>{item.order.toUpperCase()}</div>
                            <div style={{
                                verticalAlign: "middle",
                                flex: 6
                            }}>{item.content}</div>
                        </li>;
                    })

                }

                <button onClick={()=>{
                    this.props.history.push("/look")
                }} style={{position:"fixed",bottom:0,height:"50px"}}>查看答题卡</button>


            </div>
        );
    }

    componentDidMount() {

        window.addEventListener('popstate',(state) => {
            // 监听到返回事件，注意，只有触发了返回才会执行这个方法
            console.log(state);
            // this.back();
        })

    }
}

let initMapStateToProps = (state) => {
    return {
        qTypeQsObj1: state.allDataReducer[0]
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {

        saveAllData: (fn) => {
            dispatch(fn)
        },
        saveChooseData: (obj) => {
            dispatch({type:"SAVE_CHOOSE",obj})
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Answer);
