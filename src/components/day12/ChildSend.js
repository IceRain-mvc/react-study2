import React, {Component} from 'react';
import store from "./store/store";

class ChildSend extends Component {

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({});
        })
    }


    render() {
        return (
            <div>
                {/*
                    发送
                */}

                <h1>{store.getState().listReducer}</h1>

                <button onClick={()=>{
                    // store.dispatch({type:"SENDTODAGE", data: "大哥好"});
                    /*
                    * {type:}
                    * */
                    store.dispatch({type:"ADD_USER",user:{name:"zhangsan", sex: "女"}})
                }}>发送给大哥</button>
            </div>
        );
    }
}

export default ChildSend;
