import React, {Component} from 'react';
import store from "./store/store";

class ChildReceive extends Component {
    state = {
        hello: "",
        reducer:{}
    };

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                // hello: store.getState()
                //store.getState() 得到的是合并后的reducer
                reducer: store.getState()
            })
        })
    }

    render() {
        let {reducer} = this.state;
        console.log(this.state.reducer.userReducer);
        return (
            <div>
                {/*
                   接收
                */}
                {reducer.userReducer && <h1>{reducer.userReducer.name}</h1>}

                <button onClick={()=>{
                    store.dispatch({type:"ADD_LIST", data: [1, 2, 3, 4]})
                }}>添加列表</button>

            </div>
        );
    }
}

export default ChildReceive;
