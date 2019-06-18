import React, {Component} from 'react';
import DragBox from './DragBox';

class Index extends Component {

    state = {
        top: "0",
        left: "0",
        dragList: [
            {id: 1, left: "100px", top: "100px", backgroundColor: "#ff3838"},
            {id: 2, left: "50px", top: "50px", backgroundColor: "#47ff73"},
            {id: 3, left: 0, top: 0, backgroundColor: "#282bff"}]
    };

    drag(child, top, left) {
        switch (child.id) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
                break;

        }
        console.log(top, left);
        this.setState({
            top, left
        })
    }

    render() {
        return (
            <div>
                <DragBox drag={this.drag.bind(this)} child={this.state.dragList[0]}/>
                <DragBox drag={this.drag.bind(this)} child={this.state.dragList[1]}/>
                <DragBox drag={this.drag.bind(this)} child={this.state.dragList[2]}/>
                <h2>{this.state.left},{this.state.top}</h2>
            </div>
        );
    }
}

export default Index;
