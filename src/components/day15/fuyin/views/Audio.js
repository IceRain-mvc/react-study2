import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Item from "../component/Item";
import "./audio.css"
class Audio extends Component {
    render() {
        return (
            <div>
                <div className="audioContainer">
                    {
                        this.props.urls && this.props.urls.map((item, index) => {
                            item["keys"] = 2;
                            return <Item key={item.urlid} {...item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

let initMapStateToProps = (state) => {
    return {
        urls: state.reducerFuYin.urls
    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData:(fn)=>{
            dispatch(fn);
        }

    }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(Audio);

