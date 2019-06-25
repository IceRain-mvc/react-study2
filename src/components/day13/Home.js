import React, {Component} from 'react';
import {connect} from "react-redux";

class Home extends Component {
    state = {
        value:""
    };

    render() {
        return (
            <div>
                {/*
                    存数据
                    store.dispatch()
                */}
                <input type="text" value={this.state.value} onChange={(e)=>{
                    this.setState({
                        value: e.target.value
                    })
                }}/>
                <button onClick={()=>{
                    let msg = this.state.value.trim();
                    this.props.saveList(msg);
                    this.setState({
                        value: ""
                    })
                }}>存</button>

                <ul>

                    {this.props.list.map((item, index) => {
                        return <li key={index}>
                            {item}
                        </li>
                    })}
                </ul>

            </div>
        );
    }
}

/*
* store.dispatch()
*
* 第一个回调函数:取值
* 第二个回调函数:存储
*
* */
//this.props.list
let mapStateToProps = (state) => {
    return {
        /*将list 映射给了props*/
        list: state.reducer1
    }
};

/*
* store.dispatch({type:"",data:})
* this.props.saveList()
* */
let mapDispatchToProps = (dispatch) => {
    return {
        saveList: (msg) => {
            dispatch({type: "ADD_LIST", data: msg});
        }
    }
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

//this.props.

export default Home;
