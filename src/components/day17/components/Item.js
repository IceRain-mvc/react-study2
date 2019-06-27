import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class Item extends Component {

    render() {
        // console.log(this.props.isAdd);
        return (
            <li style={{display: "flex", justifyContent: "space-around"}}>
                <div>{this.props.name}</div>

                {this.props.isAdd ? (<div>已在改组</div>) : (<div onClick={() => {
                    /*
                    * 存到仓库 存所有数据
                    *
                    * */
                    let newData = this.props.allData;
                    this.props.allData.forEach((item, ind) => {

                        if (item.id === this.props.id) {
                            newData[ind].isAdd = true;
                        }

                    });
                    // console.log(newData);
                    this.props.saveAllSyncData(newData);
                }}>添加</div>)}
            </li>
        );
    }
}

// export default Item;
let initMapStateToProps = (state) => {
    // console.log(state);
    return {
        allData: state.allDataReducer
    }
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllSyncData: (data) => {
            dispatch({type: "ADD_ALL_DATA", data});
            // dispatch({type: "ADD_FILTER_DATA", arr:data});
        }
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(Item);
