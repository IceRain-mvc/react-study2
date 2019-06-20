import React, {Component} from 'react';
import Footer from "../components/Footer";
import RouterView from "../router/RouterView";
import {NavLink} from "react-router-dom";

class Listen extends Component {
    render() {
        return (
            <div>
                <h1>宝宝听</h1>
                <NavLink to="/listen/song">儿歌</NavLink>
                <NavLink to="/listen/story">故事</NavLink>
                <RouterView routes={this.props.children}/>

                <Footer/>
            </div>
        );
    }
}

export default Listen;
