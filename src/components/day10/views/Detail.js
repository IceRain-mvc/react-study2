import React, {Component} from 'react';
// import download from "../../../utils/download";

class Detail extends Component {
    render() {
        return (
            <div>
                <video src={this.props.location.state} autoPlay controls/>
                <h1>详情</h1>

            </div>
        );
    }

    /*拦截
    *
    * */

    componentWillMount() {
        /*判断本地存储 有没有  */
        if (localStorage.getItem("token")) {

        } else {
            this.props.history.replace("/login")
        }


    }

}

export default Detail;
