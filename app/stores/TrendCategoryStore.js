import MSConfig from 'configs/MSConfig';
import {Sorting} from 'pb/page_pb';
import {CategoryQuery} from 'pb/category_pb';
import {CategoryServiceClient} from 'pb/CategoryServiceClientPb';
import {makeAutoObservable} from 'mobx';

class TrendCategoryStore {

    trendCategories = [];

    constructor() {
        makeAutoObservable(this);
    }

    setTrendCategories(trendCategories) {
        this.trendCategories = trendCategories;
    }

    fetchTrendCategory(callback) {
        const q = new CategoryQuery();
        q.setSorting(Sorting.SORTING_TRENDING);
        const categoryC = new CategoryServiceClient(MSConfig.API_URL);
        categoryC.query(q, null).then(s => {
            this.trendCategories = s.getValuesList();
        }).finally(() => {
            callback && callback();
        });
    }

    reset() {

    }

    clear() {
        this.trendCategories = [];
    }
}

export default new TrendCategoryStore();
