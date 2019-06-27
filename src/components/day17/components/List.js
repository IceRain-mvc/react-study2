import React, {Component} from 'react';
import Item from "./Item";

class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.filterData.map((item, index) => {
                        return <Item/>
                    })}

            </ul>
        );
    }
}

export default List;
