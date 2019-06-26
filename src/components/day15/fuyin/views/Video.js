import React, {Component} from 'react';
import {connect} from "react-redux";
import Item from "../component/Item";
import "./video.css";

class Video extends Component {
    render() {
        return (
            <div>
                <div className="videoContainer">
                    {
                        this.props.urls && this.props.urls.map((item, index) => {
                            item["keys"] = 1;
                            return <Item key={item.urlid} {...item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        urls: state.reducerFuYin.urls
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Video);

