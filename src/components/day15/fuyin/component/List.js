import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import Introduce from "../views/Introduce";
import Video from "../views/Video";
import Audio from "../views/Audio";
import "./List.css"

class List extends Component {
    render() {
        return (
            <>
                <div className="nav">
                    <div>
                        <NavLink to="/introduce">介绍</NavLink>
                    </div>
                    <div>

                        <NavLink to="/video">视频</NavLink>
                    </div>
                    <div>

                        <NavLink to="/audio">音频</NavLink>
                    </div>


                </div>
                <Switch>
                    <Route path="/introduce" component={Introduce}/>
                    <Route path="/video" component={Video}/>
                    <Route path="/audio" component={Audio}/>
                    <Redirect from="/" to="/video"/>

                </Switch>
            </>
        );
    }
}

export default List;
