import React, {Component} from 'react';
import './Button.css'

class Button extends Component {
    render() {
        return (
            <div className="button" onClick={()=>{
                this.props.clickItem(this.props.item)
            }}>
                {this.props.item}
            </div>
        );
    }
}

export default Button;
