import React, {Component} from 'react';
import "./Dialog.css";
import PropTypes from "prop-types";


class Dialog extends Component {
    /*
    * 1:是否圆角
    * 2:width    styleDialog
    * 3:header
    * 4:content
    * 5:按钮  一个  两个
    * 6:内容  输入框  文字提示  loading...
    * flag === 1 文字提示
    * flag === 2 输入框
    * flag === 3 loading
    *
    * */

    render() {
        let {styleDialog, header, content, btnType, flag} = this.props;
        return (
            <div className="dialog_box">
                <div className="dialog"  style={styleDialog}>

                    {header && <header>{header}</header>}
                    <hr/>
                    {content && <content>
                        {flag === 1 && <h4>{content}</h4>}
                        {flag === 1 && <h4>姓名:{this.props.name}</h4>}
                        {flag === 2 && <input placeholder={content}/>}
                        {flag === 3 && <img src={content} alt=""/>}
                    </content>}
                    <hr/>
                    <footer>
                        {btnType === 1 && <div>
                            <button onClick={()=>{
                                this.props.sure();
                            }}>确定</button>
                        </div>}
                        {btnType === 2 && <div>
                            <button onClick={()=>{
                                this.props.cancel();
                            }}>取消</button>
                            <button onClick={()=>{
                                this.props.sure();
                            }}>确定</button>
                        </div>}
                    </footer>
                </div>
            </div>
        );
    }
}

export default Dialog;
Dialog.propTypes = {
    // flag: PropTypes.number,
    name: PropTypes.string,
    flag: PropTypes.oneOf([1, 2, 3])

};
