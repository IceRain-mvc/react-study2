import React, {Component} from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick = () => {
    //     console.log(this);
    // };

    handleClick(e) {
        console.log(e);
        //1:阻止事件冒泡
        alert("button");
        //阻止冒泡
        e.stopPropagation();
    }
    render() {
        return (
            <div style={{width: "200px", height: "200px", backgroundColor: "pink"}} onClick={() => {
                // alert("box")
            }}>
                <button onClick={this.handleClick.bind(this)}>点我啊啊啊啊啊啊</button>

                <input type="text" value={this.state.value} onChange={(e) => {
                    console.log(e);
                    this.setState({
                        value: e.target.value
                    })
                }}/>

                <p>{this.state.value}</p>
            </div>
        );
    }
}

export default Event;
