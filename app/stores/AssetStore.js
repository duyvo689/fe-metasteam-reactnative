import {makeAutoObservable} from 'mobx';

class AssetStore {

    assets = [];

    constructor() {
        makeAutoObservable(this);
    }

    setAssets(assets) {
        this.assets = assets;
    }

    fetchAsset(callback) {

    }

    reset() {

    }

    clear() {
        this.assets = [];
    }
}

export default new AssetStore();
