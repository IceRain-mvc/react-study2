

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


//创建一个虚拟DOM

// React : 1:提供 jsx 语法支持  2: React.Component
// 导入包
import React, {Component} from 'react';
import List from "./List";

class App extends React.Component {
    //创建虚拟DOM

    //构造
    constructor(props) {
        super(props);
        //可以使用父类中的引用
        //vue : data (){return{数据}}
        //创建数据
        this.state = {
            name: "小魔仙",
            age: 30,
            arrList: ["苹果", "西瓜", "菠萝", "黄瓜", "香蕉", "西红柿"],
            flag: true,
            persons:[
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560081078499&di=5d44d6a6d39ae523e764a9a4787a3b54&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303030646_rWHe8.jpeg",name:"樱桃小丸子1",age: 21},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560081078499&di=5d44d6a6d39ae523e764a9a4787a3b54&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303030646_rWHe8.jpeg",name:"樱桃小丸子2",age: 22},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560081078499&di=5d44d6a6d39ae523e764a9a4787a3b54&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303030646_rWHe8.jpeg",name:"樱桃小丸子3",age: 23},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560081078499&di=5d44d6a6d39ae523e764a9a4787a3b54&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303030646_rWHe8.jpeg",name:"樱桃小丸子4",age: 24},
                {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560081078499&di=5d44d6a6d39ae523e764a9a4787a3b54&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F03%2F20160303030646_rWHe8.jpeg",name:"樱桃小丸子5",age: 25}
            ]
        };
    }


    clickItem(item,index){
        // this.state.arrList[index] = "草莓";
        //更新页面

        let newArr = this.state.arrList;

        newArr[index] = "草莓";

        this.setState({
            arrList: newArr
        });

        console.log(item)
    }

    clickName(){
        this.setState({
            name: "游乐王子"

        });
    }

    //虚拟DOM
    /* <div>
                虚拟 DOM
            </div>*/
    render() {
        let {flag,name,arrList,age,persons} = this.state;
        return (
            <div>

                <ul>
                    {
                        persons.map((item,index)=>{
                            return <List key={index} {...item}/>
                        })
                    }

                </ul>


                <div onClick={this.clickName.bind(this)}>
                    {name}
                </div>
                <div>{age}</div>
                <h1>{arrList}</h1>

                <ul>
                    {/*map  foreach*/}

                    {arrList.map((item, index, arr) => {
                        return <li key={index} onClick={this.clickItem.bind(this, item, index)}><h2>{item}</h2></li>;
                    })}
                </ul>
                <button onClick={()=>{
                    this.setState({
                        flag: !flag
                    })
                }}>{flag ? "老虎" : "狮子"}</button>
                <br/>
                {flag ?
                    <img width={400}
                         src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078837527&di=2e3ff785c14b2bbcdfd3249707f1cdaa&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F30%2F27%2F05%2F591941f97d925.png"
                         alt=""/>
                    :
                    <img width={400}
                         src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560078878088&di=69ce6f796c0ecab6a858dc1d4f1a547a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F30%2F20170130190002_uYMPX.jpeg"
                         alt=""/>
                }
            </div>
        );
    }
}

//  ReactDom:


//导出

export default App;


