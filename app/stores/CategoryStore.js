import MSConfig from 'configs/MSConfig';
import {Sorting} from 'pb/page_pb';
import {CategoryQuery} from 'pb/category_pb';
import {CategoryServiceClient} from 'pb/CategoryServiceClientPb';
import {makeAutoObservable} from 'mobx';

class CategoryStore {

    categories = [];

    constructor() {
        makeAutoObservable(this);
    }

    setCategories(categories) {
        this.categories = categories;
    }

    fetchCategory(callback) {
        const q = new CategoryQuery();
        q.setSorting(Sorting.SORTING_LATEST);
        const categoryC = new CategoryServiceClient(MSConfig.API_URL);
        categoryC.query(q, null).then(s => {
            this.categories = s.getValuesList();
        }).finally(() => {
            callback && callback();
        });
    }

    reset() {

    }

    clear() {
        this.categories = [];
    }
}

export default new CategoryStore();
