import React, {Component} from 'react';
import "./Fn.css";
import watcher from "./watcher/Watcher";

class Fn extends Component {


    state = {
        flag: false
    }

    clickStar() {
        // let star = this.props.star;
        // star++;
        watcher.publish("star", 1);
    }

    clickForward() {
        this.setState({
            flag: true
        })
    }

    render() {
        let {star} = this.props;
        let {flag} = this.state;
        return (
            <div className="fn">
                <div onClick={this.clickStar.bind(this)}>点赞{star}</div>
                <div>评论</div>
                <div onClick={this.clickForward.bind(this)}>转发</div>
                {flag && <div className="box">
                    <div className="content"><h3>小姨子</h3></div>
                </div>}
            </div>
        );
    }
}

export default Fn;
