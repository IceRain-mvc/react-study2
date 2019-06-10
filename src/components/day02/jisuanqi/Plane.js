import React, {Component} from 'react';
import Button from "./components/Button";
import "./plane.css"

class Plane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planes: ["1", "2", "3", "x", "4", "5", "6", "-", "7", "8", "9", "÷", "0", "=", ".", "+"]

        }

    }


    render() {
        let {planes} = this.state;
        return (
            <div className='plane'>
                {
                    planes.map((item, index) => {
                        return <Button key={index} item={item} clickItem={this.props.clickItem}/>
                    })
                }
            </div>
        );
    }
}

export default Plane;
