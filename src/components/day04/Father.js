import React, {Component} from 'react';
import Son from "./Son";

class Father extends Component {

    constructor(props) {
        super(props);
        this.state= {
            secret: "儿子啊 要好好学习啊"

        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        secret: "儿子啊 你帮我盯着点隔壁老王"
                    })
                }}>更新</button>
                <Son secret={this.state.secret}/>
            </div>
        );
    }
}

export default Father;
