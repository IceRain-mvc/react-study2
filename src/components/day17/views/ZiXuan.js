import React, {Component} from 'react';
import Footer from "../components/Footer";
import {Button, Icon,Pagination} from "antd";

class ZiXuan extends Component {
    render() {

        return (
            <div>
                <Button icon="form">编辑</Button>
                <Button icon="plus">添加</Button>
                {/*<Icon type={}/>*/}
                <div style={{textAlign: "center", marginTop: "40px"}}>
                    <Icon style={{fontSize: "80px", color: "red"}} type="plus-circle" onClick={() => {
                        this.props.history.push("/add")
                    }}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ZiXuan;
