import React, {Component} from 'react';
import {connect} from "react-redux";

class Item extends Component {
    render() {
        return (
            <>
                <span onClick={this.playDetail.bind(this)}>{this.props.sort_title}</span>
            </>
        );
    }

    playDetail() {
        this.props.saveObj({...this.props});
    }
}
let initMapStateToProps = (state) => {
    return {

    }
};
let initMapDispatchToProps = (dispatch) => {
    return {
        saveObj:(obj)=>{
            dispatch({type:"ADD_ITEM",obj});
        }

    }
};
// export default Item;
export default connect(initMapStateToProps,initMapDispatchToProps)(Item);
