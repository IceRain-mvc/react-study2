import React, {Component} from 'react';
import Fn from "./Fn";
import "./Item.css"

class Item extends Component {
    render() {
        let {id,title,img,star} = this.props;
        return (
            <li className="item">
                <h3>{title}</h3>
                <img src={img} alt={img}/>
                <Fn star={star}/>
            </li>
        );
    }
}

export default Item;
