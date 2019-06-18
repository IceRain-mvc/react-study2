class Watcher {
    constructor() {
        this.obj = {};
    }


    subscribe(key,callback) {
        this.obj[key] = callback;
    }

    publish(key,msg) {
        if (this.obj[key]) {
            this.obj[key](msg);
        }
    }
}

export default new Watcher();

