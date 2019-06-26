import React, {Component} from 'react';
import {connect} from "react-redux";

class Introduce extends Component {
    render() {
        return (
            <div>
                {/*后台返回 标签  渲染-->xss攻击*/}
                {/*{`${this.props.content}`}*/}
                {this.props.content && <div dangerouslySetInnerHTML={{__html: this.props.content}}/>}
            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        content: state.reducerFuYin.content
    }
};


export default connect(initMapStateToProps)(Introduce);
