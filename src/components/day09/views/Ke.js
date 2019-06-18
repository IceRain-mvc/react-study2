import React, {Component} from 'react';
import {Route, Switch, NavLink, Redirect} from "react-router-dom";
// import {routes} from "../router/router-config";
import RouterView from "../router/RouterView";


class Ke extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>视频课程</h1>
                <NavLink to="/ke/re">热</NavLink>
                <NavLink to="/ke/xiang">香</NavLink>


                <button onClick={()=>{
                    this.props.history.push("/detail/" + 123);
                }}>跳转详情</button>
                {/*<Switch>*/}
                    {/*{*/}
                        {/*routes[1].children.map((item,index)=>{*/}
                            {/*return <Route key={index} path={item.path} component={item.component}/>*/}
                        {/*})*/}
                    {/*}*/}
                    {/*<Redirect to="/ke/re"/>*/}
                {/*</Switch>*/}

                <RouterView routes={this.props.children}/>

            </div>
        );
    }
}

export default Ke;
