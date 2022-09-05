import MSConfig from "configs/MSConfig";
import { Sorting } from "pb/page_pb";
import { StreamQuery } from "pb/stream_pb";
import { StreamServiceClient } from "pb/StreamServiceClientPb";
import { makeAutoObservable } from "mobx";

class StreamStore {
  streams = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStreams(streams) {
    this.streams = streams;
  }

  fetchStream(callback) {
    const q = new StreamQuery();
    q.setSorting(Sorting.SORTING_LATEST);
    const streamC = new StreamServiceClient(MSConfig.API_URL);
    streamC
      .query(q, null)
      .then((s) => {
        this.streams = s.getValuesList();
      })
      .catch((error) => console.log({ error }))
      .finally(() => {
        callback && callback();
      });
  }

  reset() {}

  clear() {
    this.streams = [];
  }
}

export default new StreamStore();
