import React, {Component} from 'react';
import './Show.css'

class Show extends Component {
    render() {
        return (
            <div className='show'>
                {this.props.msg}
            </div>
        );
    }
}

export default Show;
