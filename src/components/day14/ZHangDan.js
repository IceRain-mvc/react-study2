import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect, NavLink} from "react-router-dom";
import Add from "./Add";
import Look from "./Look";

class ZHangDan extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/add" component={Add}/>
                        <Route path="/look" component={Look}/>
                        <Redirect from="/" to="/add"/>
                    </Switch>

                    <NavLink to="/add">添加账单</NavLink>
                    <NavLink to="/look">查看账单</NavLink>

                </div>
            </BrowserRouter>
        );
    }
}

export default ZHangDan;
