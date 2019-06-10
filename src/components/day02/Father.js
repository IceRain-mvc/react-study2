import React, {Component} from 'react';
import Child from "./Child";

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child: ""
        }
    }


    receiver(msg){
        console.log(msg);
        //要改变state中的值 必须 this.setState({child:""})
        // this.state.child = msg;
        this.setState({
            child: msg
        })
    }



    render() {
        return (
            <div>
                <hr/>
                <Child childEmit={this.receiver.bind(this)}/>
                <hr/>
                <h2>{this.state.child}</h2>

            </div>
        );
    }
}

export default Father;
