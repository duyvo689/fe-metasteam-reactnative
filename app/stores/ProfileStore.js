import MSConfig from 'configs/MSConfig';
import {Sorting} from 'pb/page_pb';
import {ProfileQuery} from 'pb/profile_pb';
import {ProfileServiceClient} from 'pb/ProfileServiceClientPb';
import {makeAutoObservable} from 'mobx';

class ProfileStore {

    profiles = [];

    constructor() {
        makeAutoObservable(this);
    }

    setProfiles(profiles) {
        this.profiles = profiles;
    }

    fetchProfile(callback) {
        const q = new ProfileQuery();
        q.setSorting(Sorting.SORTING_LATEST);
        const profileC = new ProfileServiceClient(MSConfig.API_URL);
        profileC.query(q, null).then(s => {
            this.profiles = s.getValuesList();
        }).finally(() => {
            callback && callback();
        });
    }

    reset() {

    }

    clear() {
        this.profiles = [];
    }
}

export default new ProfileStore();
