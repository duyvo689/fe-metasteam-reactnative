import MSConfig from 'configs/MSConfig';
import {Sorting} from 'pb/page_pb';
import {CategoryQuery} from 'pb/category_pb';
import {CategoryServiceClient} from 'pb/CategoryServiceClientPb';
import {makeAutoObservable} from 'mobx';

class BannerCategoryStore {

    bannerCategories = [];

    constructor() {
        makeAutoObservable(this);
    }

    setBannerCategories(bannerCategories) {
        this.bannerCategories = bannerCategories;
    }

    fetchBannerCategory(callback) {
        const q = new CategoryQuery();
        q.setSorting(Sorting.SORTING_PROMOTED);
        const categoryC = new CategoryServiceClient(MSConfig.API_URL);
        categoryC.query(q, null).then(s => {
            this.bannerCategories = s.getValuesList();
        }).finally(() => {
            callback && callback();
        });
    }

    reset() {

    }

    clear() {
        this.bannerCategories = [];
    }
}

export default new BannerCategoryStore();
