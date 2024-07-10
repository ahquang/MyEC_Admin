import { makeAutoObservable } from "mobx";

class DataStore {
    initData = [
        {
          key: 0,
          learningActivities: `CCBA`,
          type: `BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 1,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
        {
          key: 1,
          learningActivities: `ABCD`,
          type: `Achieved BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 2,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
        {
          key: 2,
          learningActivities: `ABCD`,
          type: `Achieved BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 2,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
        {
          key: 3,
          learningActivities: `ABCD`,
          type: `Achieved BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 2,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
        {
          key: 4,
          learningActivities: `ABCD`,
          type: `Achieved BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 2,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
        {
          key: 5,
          learningActivities: `ABCD`,
          type: `Achieved BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 2,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
        {
          key: 6,
          learningActivities: `ABCD`,
          type: `Achieved BA`,
          domain: `BA`,
          host: `Mizuki`,
          participants: 2,
          progress: `NOT YET`,
          approvalStatus: `PENDING`,
        },
      ];

    constructor() {
        makeAutoObservable(this);
    }
}

const dataStore = new DataStore();

export default dataStore;