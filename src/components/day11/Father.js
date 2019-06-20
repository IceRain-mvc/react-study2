import React, {Component} from 'react';
import Child from "./Child";

class Father extends Component {
    state = {
        name: "北斗神拳"
    };
    render() {
        return (
            <div>
                <Child name={this.state.name} color={"pink"}/>
                <Child name={this.state.name} color={"orange"}/>
                <Child name={this.state.name} color={"blue"}/>
                <Child name={this.state.name} color={"yellow"}/>
                <Child name={this.state.name} color={"red"}/>
                <Child name={this.state.name} color={"purple"}/>

            </div>
        );
    }
}

export default Father;
