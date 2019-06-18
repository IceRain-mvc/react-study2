import React, {Component} from 'react';

class Day05 extends Component {

    state = {};


    constructor(props) {
        super(props);

        this.refAudio = React.createRef();
    }


    static getDerivedStateFromProps(nextProps) {
        console.log("getDerivedStateFromProps")
        return null;
    }

    shouldComponentUpdate(nextprops, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }


    render() {
        console.log("render");
        return (
            <div>

                <button onClick={() => {
                    this.forceUpdate();
                }}>强制更新
                </button>

                <audio ref={this.refAudio}
                       src="http://m701.music.126.net/20190613112122/2f8744cecb0a1900d83549f2a0ca394b/jdyyaac/040e/050f/0159/3de610d3ec2e14fa96a2638d9331d74f.m4a"/>
                <button onClick={() => {
                    let oAudio = this.refAudio.current;
                    oAudio.play();

                }}>播放
                </button>
                <button onClick={() => {
                    let oAudio = this.refAudio.current;
                    oAudio.pause();
                }}>暂停
                </button>
            </div>
        );
    }
}

export default Day05;

/*
*
* {"data":[{"id":31134621,"url":"http://m701.music.126.net/20190613112122/2f8744cecb0a1900d83549f2a0ca394b/jdyyaac/040e/050f/0159/3de610d3ec2e14fa96a2638d9331d74f.m4a","br":96000,"size":1963602,"md5":"3de610d3ec2e14fa96a2638d9331d74f","code":200,"expi":1200,"type":"m4a","gain":0.0,"fee":0,"uf":null,"payed":0,"flag":0,"canExtend":false,"freeTrialInfo":null,"level":"standard","encodeType":"aac"}],"code":200}
* */
