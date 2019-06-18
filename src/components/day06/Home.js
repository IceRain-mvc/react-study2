import React, {Component} from 'react';
import BathRoom from "./BathRoom";
import Kitchen from "./Kitchen";
import DogRoom from "./DogRoom";

class Home extends Component {
    render() {
        return (
            <div>
                <BathRoom/>
                <hr/>
                <Kitchen/>
                <hr/>

                <DogRoom/>
            </div>
        );
    }
}

export default Home;
