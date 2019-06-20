import React, {Component} from 'react';
import Intercept from "../hoc/Intercept";

class HomeDetail extends Component {
    render() {
        return (
            <div>
                <h1>主页详情</h1>

            </div>
        );
    }

}

HomeDetail = Intercept(HomeDetail);
export default HomeDetail;
