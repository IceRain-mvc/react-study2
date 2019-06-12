import React, {Component} from 'react';
import axios from 'axios'
import List from "./List";
import "./Home.css"

class Home extends Component {

    /*
    * 1:请求数据
    * 2:点击刷新 loading
    * 3:设置定时器
    * 4:销毁定时器
    *   中断网络请求
    *
    * */

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            flag:false,
            timer: null
        }
    }

    //请求数据
    componentDidMount(){
        this.requestData();
    }


    requestData() {
        axios.get("http://localhost:3000/api", {}).then((res) => {
            console.log(res.data);
            this.setState({
                list: res.data
            })
        }).catch((err) => {
        })
    }

    render() {
        return (
            <div>
                <button onClick={ ()=>{
                    //1:loading
                    //2:改变数据
                    //3:2s 请求数据 请求之后再消失
                    this.setState({
                        flag:true,
                        timer:setTimeout(()=>{
                            this.setState({
                                flag: false,
                            });
                            this.requestData();
                        },2000)
                    })
                }}>刷新</button>
                <List list={this.state.list}/>
                {this.state.flag&&<div className="loading"><img src="http://localhost:3002/loading.gif" alt=""/></div>}
            </div>
        );
    }

    componentWillUnmount(){
        //销毁
        // this.setState({
        //     timer: null
        // })

        //同步
        // clearTimeout(this.state.timer);

        //异步: 页面不会更新
        this.setState((state,props)=>{
            clearTimeout(state.timer);
        })
    }
}

export default Home;
