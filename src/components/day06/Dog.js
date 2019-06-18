import React, {Component} from 'react';
import watcher from "./watcher/WatcherInsTance";

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: ""
        }
    }

    componentDidMount() {
        watcher.subscribe("dog", this.getGouLiang.bind(this));
    }

    getGouLiang(msg) {
        this.setState({
            food: msg
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    watcher.publish("father", "汪汪");
                }}>
                    汪汪
                </button>

                食物:{this.state.food}

            </div>
        );
    }
}

export default Dog;
