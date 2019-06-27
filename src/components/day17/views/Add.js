import React, {Component} from 'react';
import List from "../components/List";
import filter from "../utils/filter"

class Add extends Component {
    state = {
        value: "",
        arr:[]
    };
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => {
                    let value = e.target.value;
                    this.setState({value, arr: filter(value)})
                    /*筛选*/

                }}/>
                {this.state.arr.map((item)=><div>{item.name}</div>)}
                {/*<List/>*/}
            </div>
        );
    }
}

export default Add;
