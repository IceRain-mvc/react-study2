import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";


/*RouterView this.props.children*/
class RouterView extends Component {
    /*
    * 1:接收参数
    * 2:遍历  Route
    * */
    render() {
        let {routes} = this.props;

        //routes  {path  component} ,{path ,redirect}
        //1:取出 {path="/" ,redirect="/home"}  ---><Redirect from  to>
        let redirectArr = routes.filter((item, index) => item.redirect);
        // console.log(redirectArr);
        let RedirectArr = redirectArr.map((item, index) => {
            return <Redirect key={index} from={item.path} to={item.redirect}/>;
        });
        //RedirectArr-->  [<Redirect/>,<Redirect/>]

        //2:routes 去掉{path ,redirect} 以便   遍历  {component }  {redirect}
        routes = routes.filter((item) => !item.redirect);

        return (
            <Switch>
                {routes.map((item, index) => {

                    return <Route key={index} path={item.path}
                                  render={(props) => {
                                      // props : 路由对象
                                      // 1:获取路径
                                      // 2:跳转
                                      // history
                                      //   push(跳转)
                                      //   replace() 替换
                                      // location
                                      //   pathname :"获取相对路径"
                                      //   search  ?name=张三&age=12
                                      // match
                                      //   params:  /ke/321
                                      return <item.component children={item.children} {...props}/>
                                  }}
                    />
                })}
                {RedirectArr.length !== 0 && RedirectArr}

            </Switch>
        );
    }
}

export default RouterView;
