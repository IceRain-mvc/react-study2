import React, {Component} from 'react';
import "./Item.css";
class Item extends Component {
    render() {
        return (
            <div className="item">
                <div>姓名:{this.props.name}</div>
                <div>星级:{this.props.star}</div>
            </div>
        );
    }
}

export default Item;
