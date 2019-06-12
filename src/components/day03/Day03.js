import React, {Component, Fragment} from 'react';
import Child from "./Child";
import ChildNew from "./ChildNew";

class Day03 extends Component {
    constructor(props) {
        super(props);
        //1:初始化state
        //2:给函数绑定this
        this.click = this.click.bind(this);
        console.log("constructor")

        this.state = {
            userId: 1,
            user:{
                name: "波风水门",
                age: 24
            }
        }
    }

    click() {
        console.log(this)
    }

    render() {

        //1:返回一个虚拟DOM  jsx
        //2:table  tr td

        //注意: render之后  有没有将虚拟dom转化成真实dom  ReactDom.render()
        console.log("render");

        return (
            <Fragment>
                <button onClick={()=>{
                    this.setState({
                        userId: 2
                    })
                }}>父组件更新state</button>
                <Child userId={this.state.userId}/>

                <ChildNew user={this.state.user}/>
            </Fragment>
        );
    }

    componentDidMount(){
        //axios
        //初始化定时器
        console.log("componentDidMount")
    }


    /*--------------------华丽丽的分割线-----------------------*/



}

export default Day03;
