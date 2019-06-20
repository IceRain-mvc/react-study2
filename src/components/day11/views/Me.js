import React, {Component} from 'react';
import Header from "../components/Header";
import Intercept from "../hoc/Intercept";

class Me extends Component {
    render() {
        return (
            <div>
                <Header/>
                <button onClick={()=>{
                    this.props.history.push("/meDetail")
                }}>Me跳转详情</button>
            </div>
        );
    }
}

Me = Intercept(Me);

export default Me;
