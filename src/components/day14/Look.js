import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

class Look extends Component {
    render() {
        return (
            <div>
                {/*查看*/}
                <h1>查看</h1>
                {
                    this.props.list.map((item, index) => {
                        return <Fragment key={index}>
                            <span>{item.bill}&nbsp;{item.type}</span>
                            <br/>
                        </Fragment>;
                    })
                }

                <div style={{backgroundColor: "#cded8B"}}>{this.props.total}</div>
            </div>
        );
    }

    componentDidMount() {

        this.props.saveTotal(this.props.total)

        // axios.get().then((res) => {
        //     //存到仓库
        //     // dispatch()
        //
        // });
    }
}

let mapStateToProps = (state) => {
    let total = 0;
    state.addReducer.forEach((item, index) => {
        let billNew = parseFloat(item.bill);
        if (item.type === "收入") {

            total += billNew;
        } else {
            total -= billNew;
        }
    });


    return {
        list: state.addReducer,
        // total: state.totalReducer,
        total: total
    }
};



let mapDispatchToProps = (dispatch) => {
    return {
        saveTotal:(total)=>{
            dispatch({type:"TOTAL",total})
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Look);
