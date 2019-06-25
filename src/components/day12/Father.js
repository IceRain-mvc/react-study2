import React, {Component} from 'react';
import ChildSend from "./ChildSend";
import ChildReceive from "./ChildReceive";

class Father extends Component {
    render() {
        return (
            <div>
                <ChildSend/>
                <ChildReceive/>
            </div>
        );
    }
}

export default Father;
