import React, {Component} from 'react';

class Page extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.props.history.push("/answer",{index: 0});
                }}>开始答题</button>
            </div>
        );
    }
}

export default Page;
