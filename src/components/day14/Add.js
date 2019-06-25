import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";

class Add extends Component {
    state = {
        bill: "",
        type: ""
    };

    render() {
        let {bill, type} = this.state;
        return (
            <div>
                {/*添加*/}
                {/*按钮*/}

                <input type="text" value={bill} onChange={(e) => {
                    this.setState({
                        bill: e.target.value
                    })
                }}/>

                <select value={type} onChange={(e) => {
                    this.setState({
                        type: e.target.value
                    })
                }}>

                    <option value="--请选择--">--请选择--</option>
                    <option value="收入">收入</option>
                    <option value="支出">支出</option>
                </select>

                <h1>添加</h1>
                <button onClick={this.save.bind(this)}>保存</button>

                <button onClick={this.saveAsyncData.bind(this)}>保存异步请求的数据</button>
            </div>
        );
    }

    /*next: 真的dispatch*/
    request(next) {
        //请求数据
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then((res)=>{
            //存数据
            let response = res.data.list;
            next({type:"ADD_LIST", response});

        })
    }

    saveAsyncData() {
        this.props.saveAsync(this.request);

        // //存起来
        // //异步
        // //1:请求数据

        // //2:请求成功之后 存起来
    }

    save() {
        let {bill, type} = this.state;
        //保存到仓库
        let obj = {
            bill, type
        };
        this.props.saveToStore(obj);

    }
}

let mapStateToProps = (state) => {
    return {}
};

let mapDisPatchToProps = (dispatch) => {
    return {
        saveToStore: (obj) => {
            dispatch({type: "ADD", obj});
            // dispatch({type: "TOTAL"});
        },
        /*4: dispatch 回调*/
        saveAsync:(fn)=>{
            /*dispatch ({type:})*/
            dispatch(fn)
        }
    }
};

export default connect(mapStateToProps, mapDisPatchToProps)(Add);
