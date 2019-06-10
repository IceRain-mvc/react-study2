import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={this.clickChild.bind(this)}>老爹 告诉你个秘密</button>

            </div>
        );
    }

    clickChild(){
        this.props.childEmit("小心隔壁老王");
    }
}

export default Child;
