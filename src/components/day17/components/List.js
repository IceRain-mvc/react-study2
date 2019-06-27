import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import filter from "../utils/filter";

class List extends Component {
    render() {
        // let filterData = this.props.allData.filter((item)=>{
        //     return item.isAdd;
        // });

        /*3:*/
        let filterData = filter(this.props.allData, this.props.value);
        return (
            <ul>
                {
                    filterData.map((item, index) => {
                        /*2:*/
                        return <li key={item.id} style={{display: "flex", justifyContent: "space-around"}}>
                            <div>{item.name}</div>

                            {item.isAdd ? (<div>已在改组</div>) : (<div onClick={() => {
                                /*
                                * 存到仓库 存所有数据
                                *
                                * */
                                let newData = this.props.allData;
                                this.props.allData.forEach((i, ind) => {

                                    if (i.id === item.id) {
                                        newData[ind].isAdd = true;
                                    }

                                });
                                // console.log(newData);
                                this.props.saveAllData(newData);
                            }}>添加</div>)}
                        </li>;
                    })
                }

            </ul>
        );
    }
}

// export default List;
let initMapStateToProps = (state) => {
    return {
        allData: state.allDataReducer
        // filterData: state.allFilterReducer
    }
};

let initMapDispatchToProps = (dispatch) => {
    return {
        saveAllData: (data) => {
            dispatch({type: "ADD_ALL_DATA", data})
        }
    }
}


export default connect(initMapStateToProps, initMapDispatchToProps)(List);

