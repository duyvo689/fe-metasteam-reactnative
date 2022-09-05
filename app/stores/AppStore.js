import {makeAutoObservable} from 'mobx';

class AppStore {

    mode = 'User';

    constructor() {
        makeAutoObservable(this);
    }

    setMode(mode) {
        this.mode = mode;
    }

    reset() {

    }

    clear() {
        this.mode = 'User';
    }
}

export default new AppStore();
