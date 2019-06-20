import React, {Component} from 'react';
import Intercept from "../hoc/Intercept";

class MeDetail extends Component {
    render() {
        return (
            <div>
                <h1>我的详情</h1>
            </div>
        );
    }
}
MeDetail = Intercept(MeDetail);

export default MeDetail;
