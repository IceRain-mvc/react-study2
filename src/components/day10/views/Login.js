import React, {Component} from 'react';
import "../../../utils/md5Utils";

class Login extends Component {
    state = {
        name: "",
        pwd: ""
    };

    render() {
        return (
            <div>
                <input type="text" placeholder={"请输入用户名"} value={this.state.name} onChange={(e)=>{
                    this.setState({
                        name: e.target.value
                    })
                }} />
                <input type="text" placeholder={"请输入用密码"} value={this.state.pwd} onChange={(e)=>{
                    this.setState({
                        pwd: e.target.value
                    })
                }} />
                <button onClick={()=>{
                    let name = this.state.name;
                    let pwd = this.state.pwd;

                    if (!name.trim()|| !pwd.trim()) {
                        alert("请输入用户名或密码");
                        return
                    }
                    let md5Prev = name + pwd;
                    let md5 = md5Prev.MD5(32);
                    console.log(md5);
                    localStorage.setItem("token", md5);
                    this.props.history.goBack();

                }}>登录</button>
            </div>
        );
    }
}

export default Login;
