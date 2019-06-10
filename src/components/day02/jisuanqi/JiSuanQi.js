import React, {Component} from 'react';
import Show from "./Show";
import Plane from "./Plane";
import calculate from "./script/calculate";

class JiSuanQi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null
        }
    }


    clickItem(msg) {
        //12 * 321 total = total * next
        this.setState(calculate(this.state, msg));
    }

    render() {
        return (
            <div>
                <Show msg={this.state.next || this.state.total || 0}/>

                <Plane clickItem={this.clickItem.bind(this)}/>
            </div>
        );
    }
}

export default JiSuanQi;
