import React, {Component} from 'react';
import "./detail.css";
import connect from "react-redux/es/connect/connect";
import {requestDetail} from "../../api/request";

class Detail extends Component {

    state = {
        url: ""
    };

    render() {
        return (
            <div className="detail">
                {/*<h1>{this.props.item.title}</h1>*/}
                {/*<h1>{this.props.item.keys}</h1>*/}

                {this.props.item.keys === 1 &&
                <video style={{height: "200px",width: "100%"}} src={this.state.url} autoPlay controls/>}
                {this.props.item.keys === 2 && <audio style={{width: "100%"}} src={this.state.url} autoPlay controls/>}
            </div>
        );
    }

    /*在这请求*/

    getResult(response) {
        /*得到结果*/
        // console.log(response);

        if (this.props.item.keys === 1) {
            this.setState({
                url: response.url_1
            })
        } else {
            this.setState({
                url: response.url_5
            })
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            /*请求*/
            requestDetail(nextProps.item.urlid, this.getResult.bind(this));
        }

        return true;

    }
}


let initMapStateToProps = (state) => {
    return {
        item: state.reducerItem
    }
};


export default connect(initMapStateToProps)(Detail);

