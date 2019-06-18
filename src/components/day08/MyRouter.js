import React, {Component} from 'react';

import {routes} from "../../router/router-config";

import {
    // HashRouter,
    BrowserRouter as Router, //只用一次  在根元素  只能套一个标签
    Link,//跳转
    Route,//显示  path="路径"  component="组件",
    Switch,//管理 Route  Redirect
    NavLink,//跳转  可以添加样式
    Redirect,//重定向    BrowserRouter--> div> Link  + Switch->  Route /Redirect

} from "react-router-dom"
import Home from "./nav/Home";
import Main from "./nav/Main";
import Me from "./nav/Me";

class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*<Link to="/" >Home</Link>*/}
                    <Link to="/home">首页</Link>
                    <Link to="/main">内容</Link>
                    <Link to="/me">我的</Link>

                    {/*/!*显示  配置文件*!/*/}
                    {/*<Route path="/home" component={Home}/>*/}
                    {/*<Route path="/main" component={Main}/>*/}
                    {/*<Route path="/me" component={Me}/>*/}

                    <Switch>
                        {/*Route*/}
                        {routes.map((item, index) => {
                            return <Route path={item.path} component={item.component}/>;
                        })}
                        <Redirect from="/" to="/home"/>

                    </Switch>

                    <RouterView></RouterView>
                </div>
            </Router>
        );
    }
}

export default MyRouter;
