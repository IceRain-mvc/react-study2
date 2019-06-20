import React, {Component} from 'react';
import Intercept from "../hoc/Intercept";

class PageDetail extends Component {
    render() {
        return (
            <div>
                <h1>页面详情</h1>

            </div>
        );
    }
}
PageDetail = Intercept(PageDetail);

export default PageDetail;
