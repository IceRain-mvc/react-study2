import React, {Component} from 'react';
// import Father from "./components/day11/Father";
// import Index from "./components/day11/intercept/Index";
// import Father from "./components/day12/Father";
import {Provider} from "react-redux";
// import store from "./components/day13/store";
// import Home from "./components/day13/Home";
// import ZHangDan from "./components/day14/ZHangDan";
// import store from "./components/day14/store/store";
// import Home from "./components/day15/Home";
import store from "./components/day15/store/store";
import Index from "./components/day15/fuyin/Index";
// import Home from "./components/day09/Home";
// import Event from "./components/day04/Event";
// import Day05 from "./components/day05/Day05";
// import Father from "./components/day04/Father";
// import Day01 from './components/day01/Index.js';
// import Day02 from './components/day02/Father';
// import JiSuanQi from "./components/day02/jisuanqi/JiSuanQi";
// import Dialog from './components/day02/dialog/App';
// import Day03 from "./components/day03/Day03";
// import Home from "./components/day04/LifeStyle/Home";
// import Home from "./components/day05/Music/Home";
// import Day06 from "./components/day06/Day06";
// import PiGeChang from "./components/day06/PiGeChang/PiGeChang";
// import Index from "./components/day07/Index";
// import Index from "./components/day08/Index";
// import MyRouter from "./components/day08/MyRouter";
// import Day10 from "./components/day10/Day10";
// import Baby from "./components/day10/Baby";


class App extends Component {
    render() {
        return (
            <div>
                {/*<Day01 />*/}
                {/*<Day02 />*/}
                {/*<JiSuanQi/>*/}
                {/*<Dialog/>*/}
                {/*<Day03/>*/}
                {/*<Father/>*/}
                {/*<Home/>*/}
                {/*<Event />*/}
                {/*<Day05/>*/}
                {/*<Home/>*/}
                {/*<Day06/>*/}
                {/*<PiGeChang/>*/}
                {/*<Index/>*/}
                {/*<MyRouter/>*/}
                {/*<Home />*/}
                {/*<Day10/>*/}
                {/*<Baby/>*/}
                {/*<Father/>*/}
                {/*<Index/>*/}
                {/*<Provider store={store}>*/}
                {/*<Home/>*/}
                {/*</Provider>*/}
                <Provider store={store}>
                    <Index/>
                </Provider>
            </div>

        );
    }
}

export default App;
