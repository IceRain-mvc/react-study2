import React, {Component} from 'react';
import './Button.css'
import Dialog from "./Dialog";

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: null,
            types: [{type:1,name:"alert"}, {type:2,name:"confirm"}, {type:3,name:"prompt"}]
        }
    }


    render() {
        let {types} = this.state;
        return (
            <div>
                {types.map((item, index) => {
                    return <button key={index} className="btn" onClick={this.clickShowDialog.bind(this,item.type)}>
                        {item.name}
                    </button>
                })}

                <Dialog type={this.state.type}/>
            </div>
        );
    }

    clickShowDialog(type) {
        //根据type类型的值 显示哪一个组件  alert
        this.setState({
            type: type
        })
    }
}

export default Button;
