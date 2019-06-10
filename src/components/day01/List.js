import React, {Component} from 'react';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <img className="header_img" src={this.props.img} alt=""/>
                <div className="item_name">{this.props.name}</div>
                <div className="item_age">{this.props.age}</div>
            </div>
        );
    }
}

List.propTypes = {};

export default List;
