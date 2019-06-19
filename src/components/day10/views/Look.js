import React, {Component} from 'react';
import RouterView from "../router/RouterView";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";

class Look extends Component {
    render() {
        return (
            <div>
                <h1>宝宝看</h1>

                <NavLink to="/look/song">儿歌</NavLink>
                <NavLink to="/look/story">故事</NavLink>
                <NavLink to="/look/cartoon">动画片</NavLink>

                <RouterView routes={this.props.children}/>
                <Footer/>

            </div>
        );
    }
}

export default Look;
