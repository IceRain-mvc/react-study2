import React, {Component, Suspense} from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";
import RouterView from "./router/RouterView";
import routes from "./router/routerConfig";
/*同步*/
// import Shop from "./Shop";
// import My from "./My";
/*
* 异步组件
* */
// let Shop = React.lazy(() => import("./Shop"));
let My = React.lazy(() => import("./My"));

class Day18 extends Component {
    render() {
        return (
            <BrowserRouter>

                <div>

                    <Suspense fallback={<div>Loading</div>}>

                    <RouterView routes={routes}/>
                    </Suspense>

                    <NavLink to="/home">首页</NavLink>
                    <NavLink to="/shop">购物</NavLink>
                    <NavLink to="/my">我的</NavLink>
                </div>
            </BrowserRouter>
        );
    }
}

export default Day18;
