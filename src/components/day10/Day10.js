import React, {Component} from 'react';
import {BrowserRouter,Link, Route} from "react-router-dom";


class Home extends Component {
    render() {
        console.log(this.props);
        /*
        * 路由对象
        *   history :
        *     push
        *     replace
        *   location
        *     pathname
        *     search  ? &
        *   match
        *     params:   /:id
        *
        * */
        return (
            <div>
                <h1>首页</h1>

                <button onClick={()=>{
                    this.props.history.push("/detail",{name: "张三"})
                }}>跳啊啊啊啊</button>
            </div>
        );
    }
}


class Detail extends Component {
    render() {
        console.log(this.props.location.state.name);
        return (
            <div>
                <h1>详情</h1>
            </div>
        );
    }
}



class Day10 extends Component {
    render() {
        return (
            <BrowserRouter>
                <Link to="/path">跳转</Link>
                <Link to="/me">跳转到我的</Link>
                <Route path="/path" render={(props)=>{
                    return <Home {...props}/>
                }}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/me" component={Me}/>
            </BrowserRouter>
        );
    }
}

class Me extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>我的</h1>

            </div>
        );
    }

}

export default Day10;
