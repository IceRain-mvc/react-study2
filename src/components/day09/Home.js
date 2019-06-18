import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";
import {routes} from "./router/router-config";
import RouterView from "./router/RouterView";

class Home extends Component {
    render() {
        return (
            <Router>
                <NavLink to="/zhen">真题</NavLink>
                <NavLink to="/ke">视频课程</NavLink>
                <NavLink to="/xue">学习</NavLink>


                {/*
                routes:数据
                */}
                {/*vue:router-link  router-view  */}

                {/*RouterView 组件
                    <Route
                    <Route
                    <Route
                    <Route
                    <Route
                    <Redirect

                    封装一个组件
                     1:传参
                     2:功能


                */}
                <RouterView routes={routes}/>

                {/*exact*/}
                {/*<Redirect to="/zhen" exact/>*/}

            </Router>
        );
    }
}

export default Home;
//<Switch>
//    {
//        routes.map((item, index) => {
//            /*exact : 没有这个路径的话就不显示*/
//            return <Route key={index} path={item.path} component={item.component}/>
//        })
//    }
//</Switch>
