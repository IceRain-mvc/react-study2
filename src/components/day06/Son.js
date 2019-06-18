import React, {Component} from 'react';
import watcher from "./watcher/WatcherInsTance.js";

class Son extends Component {
    /*
    * 订阅者
    * */
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
    }

    componentDidMount() {
        watcher.subscribe("son",this.handleMag.bind(this));
    }

    /*
    * 传过去
    * */
    handleMag(msg) {
        console.log(msg);
        this.setState({
            msg
        })
    }

    render() {
        return (
            <div>
                <h4>儿子收到的消息:{this.state.msg}</h4>
            </div>
        );
    }
}

export default Son;
