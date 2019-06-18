class Watcher {
    constructor() {
        // this.callback = null;
        /*
        * "dog":回调
        * "father":调用
        * */
        this.obj = {};
        window.obj = this.obj;
    }

    /*
    * 标识
    *
    * */

    /*
    *  1:订阅
    * */
    subscribe(key, callback) {
        //this.callback = callback;
        this.obj[key] = callback;
        /*
        * this.obj: "key":callback
        * */
    }

    /*
    *
    * 2:发布
    * */
    publish(key, msg) {
        //this.callback(msg)
        if (this.obj[key]) {
            this.obj[key](msg);
        }
    }
}

export default Watcher;

//父:new Watcher
//子:new Watcher
