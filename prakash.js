const rrule = require("rrule").RRule;

const response = [
  {
    slots: [
      {
        modalityName: "MRI 1.5 T",
        availableTimes: [
          {
            startTime: "2023-11-07T08:00:00.000Z",
            endTime: "2023-11-07T08:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T08:15:00.000Z",
            endTime: "2023-11-07T08:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T08:30:00.000Z",
            endTime: "2023-11-07T08:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T08:45:00.000Z",
            endTime: "2023-11-07T09:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:00:00.000Z",
            endTime: "2023-11-07T09:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:15:00.000Z",
            endTime: "2023-11-07T09:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:30:00.000Z",
            endTime: "2023-11-07T09:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:45:00.000Z",
            endTime: "2023-11-07T10:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:00:00.000Z",
            endTime: "2023-11-07T10:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:15:00.000Z",
            endTime: "2023-11-07T10:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:30:00.000Z",
            endTime: "2023-11-07T10:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:45:00.000Z",
            endTime: "2023-11-07T11:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:00:00.000Z",
            endTime: "2023-11-07T11:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:15:00.000Z",
            endTime: "2023-11-07T11:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:30:00.000Z",
            endTime: "2023-11-07T11:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:45:00.000Z",
            endTime: "2023-11-07T12:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:00:00.000Z",
            endTime: "2023-11-07T12:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:15:00.000Z",
            endTime: "2023-11-07T12:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:30:00.000Z",
            endTime: "2023-11-07T12:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:45:00.000Z",
            endTime: "2023-11-07T13:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:00:00.000Z",
            endTime: "2023-11-07T13:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:15:00.000Z",
            endTime: "2023-11-07T13:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:30:00.000Z",
            endTime: "2023-11-07T13:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:45:00.000Z",
            endTime: "2023-11-07T14:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:00:00.000Z",
            endTime: "2023-11-07T14:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:15:00.000Z",
            endTime: "2023-11-07T14:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:30:00.000Z",
            endTime: "2023-11-07T14:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:45:00.000Z",
            endTime: "2023-11-07T15:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:00:00.000Z",
            endTime: "2023-11-07T15:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:15:00.000Z",
            endTime: "2023-11-07T15:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:30:00.000Z",
            endTime: "2023-11-07T15:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:45:00.000Z",
            endTime: "2023-11-07T16:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:00:00.000Z",
            endTime: "2023-11-07T16:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:15:00.000Z",
            endTime: "2023-11-07T16:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:30:00.000Z",
            endTime: "2023-11-07T16:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:45:00.000Z",
            endTime: "2023-11-07T17:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:00:00.000Z",
            endTime: "2023-11-07T17:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:15:00.000Z",
            endTime: "2023-11-07T17:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:30:00.000Z",
            endTime: "2023-11-07T17:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:45:00.000Z",
            endTime: "2023-11-07T18:00:00.000Z",
            technologist: "Dr. John Doe",
          },
        ],
        nonAvailableTimesForModality: [],
      },
    ],
    procedure: {
      procedureName: "MRI of Chest",
      modalityType: "MRI",
    },
  },
  {
    slots: [
      {
        modalityName: "CT1",
        availableTimes: [
          {
            startTime: "2023-11-07T10:00:00.000Z",
            endTime: "2023-11-07T10:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T10:15:00.000Z",
            endTime: "2023-11-07T10:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T10:30:00.000Z",
            endTime: "2023-11-07T10:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T10:45:00.000Z",
            endTime: "2023-11-07T10:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:00:00.000Z",
            endTime: "2023-11-07T11:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:15:00.000Z",
            endTime: "2023-11-07T11:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:30:00.000Z",
            endTime: "2023-11-07T11:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:45:00.000Z",
            endTime: "2023-11-07T11:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:00:00.000Z",
            endTime: "2023-11-07T12:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:15:00.000Z",
            endTime: "2023-11-07T12:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:30:00.000Z",
            endTime: "2023-11-07T12:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:45:00.000Z",
            endTime: "2023-11-07T12:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:00:00.000Z",
            endTime: "2023-11-07T13:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:15:00.000Z",
            endTime: "2023-11-07T13:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:30:00.000Z",
            endTime: "2023-11-07T13:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:45:00.000Z",
            endTime: "2023-11-07T13:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:00:00.000Z",
            endTime: "2023-11-07T14:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:15:00.000Z",
            endTime: "2023-11-07T14:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:30:00.000Z",
            endTime: "2023-11-07T14:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:45:00.000Z",
            endTime: "2023-11-07T14:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:00:00.000Z",
            endTime: "2023-11-07T15:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:15:00.000Z",
            endTime: "2023-11-07T15:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:30:00.000Z",
            endTime: "2023-11-07T15:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:45:00.000Z",
            endTime: "2023-11-07T15:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:00:00.000Z",
            endTime: "2023-11-07T16:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:15:00.000Z",
            endTime: "2023-11-07T16:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:30:00.000Z",
            endTime: "2023-11-07T16:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:45:00.000Z",
            endTime: "2023-11-07T16:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:00:00.000Z",
            endTime: "2023-11-07T17:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:15:00.000Z",
            endTime: "2023-11-07T17:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:30:00.000Z",
            endTime: "2023-11-07T17:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:45:00.000Z",
            endTime: "2023-11-07T17:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
        ],
        nonAvailableTimesForModality: [],
      },
      {
        modalityName: "CT2",
        availableTimes: [
          {
            startTime: "2023-11-07T10:00:00.000Z",
            endTime: "2023-11-07T10:10:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:05:00.000Z",
            endTime: "2023-11-07T10:15:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:10:00.000Z",
            endTime: "2023-11-07T10:20:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:15:00.000Z",
            endTime: "2023-11-07T10:25:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:20:00.000Z",
            endTime: "2023-11-07T10:30:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:25:00.000Z",
            endTime: "2023-11-07T10:35:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:30:00.000Z",
            endTime: "2023-11-07T10:40:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:35:00.000Z",
            endTime: "2023-11-07T10:45:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:40:00.000Z",
            endTime: "2023-11-07T10:50:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:45:00.000Z",
            endTime: "2023-11-07T10:55:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:50:00.000Z",
            endTime: "2023-11-07T11:00:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:55:00.000Z",
            endTime: "2023-11-07T11:05:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:00:00.000Z",
            endTime: "2023-11-07T11:10:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:05:00.000Z",
            endTime: "2023-11-07T11:15:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:10:00.000Z",
            endTime: "2023-11-07T11:20:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:15:00.000Z",
            endTime: "2023-11-07T11:25:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:20:00.000Z",
            endTime: "2023-11-07T11:30:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:25:00.000Z",
            endTime: "2023-11-07T11:35:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:30:00.000Z",
            endTime: "2023-11-07T11:40:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:35:00.000Z",
            endTime: "2023-11-07T11:45:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:40:00.000Z",
            endTime: "2023-11-07T11:50:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:45:00.000Z",
            endTime: "2023-11-07T11:55:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:50:00.000Z",
            endTime: "2023-11-07T12:00:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:55:00.000Z",
            endTime: "2023-11-07T12:05:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
        ],
        nonAvailableTimesForModality: [],
      },
    ],
    procedure: {
      procedureName: "CT of Brain",
      modalityType: "CT",
    },
  },
];
const responseWithCombinedTime = [
  {
    slots: [
      {
        modalityName: "MRI 1.5 T",
        availableTimes: [
          {
            startTime: "2023-11-07T08:00:00.000Z",
            endTime: "2023-11-07T08:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T08:15:00.000Z",
            endTime: "2023-11-07T08:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T08:30:00.000Z",
            endTime: "2023-11-07T08:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T08:45:00.000Z",
            endTime: "2023-11-07T09:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:00:00.000Z",
            endTime: "2023-11-07T09:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:15:00.000Z",
            endTime: "2023-11-07T09:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:30:00.000Z",
            endTime: "2023-11-07T09:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T09:45:00.000Z",
            endTime: "2023-11-07T10:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:00:00.000Z",
            endTime: "2023-11-07T10:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:15:00.000Z",
            endTime: "2023-11-07T10:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:30:00.000Z",
            endTime: "2023-11-07T10:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T10:45:00.000Z",
            endTime: "2023-11-07T11:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:00:00.000Z",
            endTime: "2023-11-07T11:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:15:00.000Z",
            endTime: "2023-11-07T11:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:30:00.000Z",
            endTime: "2023-11-07T11:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T11:45:00.000Z",
            endTime: "2023-11-07T12:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:00:00.000Z",
            endTime: "2023-11-07T12:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:15:00.000Z",
            endTime: "2023-11-07T12:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:30:00.000Z",
            endTime: "2023-11-07T12:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T12:45:00.000Z",
            endTime: "2023-11-07T13:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:00:00.000Z",
            endTime: "2023-11-07T13:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:15:00.000Z",
            endTime: "2023-11-07T13:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:30:00.000Z",
            endTime: "2023-11-07T13:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T13:45:00.000Z",
            endTime: "2023-11-07T14:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:00:00.000Z",
            endTime: "2023-11-07T14:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:15:00.000Z",
            endTime: "2023-11-07T14:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:30:00.000Z",
            endTime: "2023-11-07T14:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T14:45:00.000Z",
            endTime: "2023-11-07T15:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:00:00.000Z",
            endTime: "2023-11-07T15:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:15:00.000Z",
            endTime: "2023-11-07T15:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:30:00.000Z",
            endTime: "2023-11-07T15:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T15:45:00.000Z",
            endTime: "2023-11-07T16:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:00:00.000Z",
            endTime: "2023-11-07T16:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:15:00.000Z",
            endTime: "2023-11-07T16:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:30:00.000Z",
            endTime: "2023-11-07T16:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T16:45:00.000Z",
            endTime: "2023-11-07T17:00:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:00:00.000Z",
            endTime: "2023-11-07T17:15:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:15:00.000Z",
            endTime: "2023-11-07T17:30:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:30:00.000Z",
            endTime: "2023-11-07T17:45:00.000Z",
            technologist: "Dr. John Doe",
          },
          {
            startTime: "2023-11-07T17:45:00.000Z",
            endTime: "2023-11-07T18:00:00.000Z",
            technologist: "Dr. John Doe",
          },
        ],
        nonAvailableTimesForModality: [],
      },
    ],
    procedure: {
      procedureName: "MRI of Chest",
      modalityType: "MRI",
    },
    combinedSlots: [
      {
        startTime: "2023-11-07T08:00:00.000Z",
        endTime: "2023-11-07T08:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T08:15:00.000Z",
        endTime: "2023-11-07T08:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T08:30:00.000Z",
        endTime: "2023-11-07T08:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T08:45:00.000Z",
        endTime: "2023-11-07T09:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T09:00:00.000Z",
        endTime: "2023-11-07T09:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T09:15:00.000Z",
        endTime: "2023-11-07T09:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T09:30:00.000Z",
        endTime: "2023-11-07T09:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T09:45:00.000Z",
        endTime: "2023-11-07T10:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T10:00:00.000Z",
        endTime: "2023-11-07T10:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T10:15:00.000Z",
        endTime: "2023-11-07T10:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T10:30:00.000Z",
        endTime: "2023-11-07T10:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T10:45:00.000Z",
        endTime: "2023-11-07T11:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T11:00:00.000Z",
        endTime: "2023-11-07T11:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T11:15:00.000Z",
        endTime: "2023-11-07T11:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T11:30:00.000Z",
        endTime: "2023-11-07T11:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T11:45:00.000Z",
        endTime: "2023-11-07T12:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T12:00:00.000Z",
        endTime: "2023-11-07T12:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T12:15:00.000Z",
        endTime: "2023-11-07T12:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T12:30:00.000Z",
        endTime: "2023-11-07T12:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T12:45:00.000Z",
        endTime: "2023-11-07T13:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T13:00:00.000Z",
        endTime: "2023-11-07T13:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T13:15:00.000Z",
        endTime: "2023-11-07T13:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T13:30:00.000Z",
        endTime: "2023-11-07T13:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T13:45:00.000Z",
        endTime: "2023-11-07T14:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T14:00:00.000Z",
        endTime: "2023-11-07T14:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T14:15:00.000Z",
        endTime: "2023-11-07T14:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T14:30:00.000Z",
        endTime: "2023-11-07T14:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T14:45:00.000Z",
        endTime: "2023-11-07T15:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T15:00:00.000Z",
        endTime: "2023-11-07T15:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T15:15:00.000Z",
        endTime: "2023-11-07T15:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T15:30:00.000Z",
        endTime: "2023-11-07T15:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T15:45:00.000Z",
        endTime: "2023-11-07T16:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T16:00:00.000Z",
        endTime: "2023-11-07T16:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T16:15:00.000Z",
        endTime: "2023-11-07T16:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T16:30:00.000Z",
        endTime: "2023-11-07T16:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T16:45:00.000Z",
        endTime: "2023-11-07T17:00:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T17:00:00.000Z",
        endTime: "2023-11-07T17:15:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T17:15:00.000Z",
        endTime: "2023-11-07T17:30:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T17:30:00.000Z",
        endTime: "2023-11-07T17:45:00.000Z",
        technologist: "Dr. John Doe",
      },
      {
        startTime: "2023-11-07T17:45:00.000Z",
        endTime: "2023-11-07T18:00:00.000Z",
        technologist: "Dr. John Doe",
      },
    ],
  },
  {
    slots: [
      {
        modalityName: "CT1",
        availableTimes: [
          {
            startTime: "2023-11-07T10:00:00.000Z",
            endTime: "2023-11-07T10:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T10:15:00.000Z",
            endTime: "2023-11-07T10:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T10:30:00.000Z",
            endTime: "2023-11-07T10:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T10:45:00.000Z",
            endTime: "2023-11-07T10:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:00:00.000Z",
            endTime: "2023-11-07T11:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:15:00.000Z",
            endTime: "2023-11-07T11:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:30:00.000Z",
            endTime: "2023-11-07T11:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T11:45:00.000Z",
            endTime: "2023-11-07T11:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:00:00.000Z",
            endTime: "2023-11-07T12:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:15:00.000Z",
            endTime: "2023-11-07T12:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:30:00.000Z",
            endTime: "2023-11-07T12:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T12:45:00.000Z",
            endTime: "2023-11-07T12:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:00:00.000Z",
            endTime: "2023-11-07T13:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:15:00.000Z",
            endTime: "2023-11-07T13:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:30:00.000Z",
            endTime: "2023-11-07T13:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T13:45:00.000Z",
            endTime: "2023-11-07T13:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:00:00.000Z",
            endTime: "2023-11-07T14:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:15:00.000Z",
            endTime: "2023-11-07T14:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:30:00.000Z",
            endTime: "2023-11-07T14:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T14:45:00.000Z",
            endTime: "2023-11-07T14:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:00:00.000Z",
            endTime: "2023-11-07T15:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:15:00.000Z",
            endTime: "2023-11-07T15:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:30:00.000Z",
            endTime: "2023-11-07T15:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T15:45:00.000Z",
            endTime: "2023-11-07T15:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:00:00.000Z",
            endTime: "2023-11-07T16:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:15:00.000Z",
            endTime: "2023-11-07T16:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:30:00.000Z",
            endTime: "2023-11-07T16:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T16:45:00.000Z",
            endTime: "2023-11-07T16:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:00:00.000Z",
            endTime: "2023-11-07T17:10:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:15:00.000Z",
            endTime: "2023-11-07T17:25:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:30:00.000Z",
            endTime: "2023-11-07T17:40:00.000Z",
            technologist: "Dr. Link Mayer",
          },
          {
            startTime: "2023-11-07T17:45:00.000Z",
            endTime: "2023-11-07T17:55:00.000Z",
            technologist: "Dr. Link Mayer",
          },
        ],
        nonAvailableTimesForModality: [],
      },
      {
        modalityName: "CT2",
        availableTimes: [
          {
            startTime: "2023-11-07T10:00:00.000Z",
            endTime: "2023-11-07T10:10:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:05:00.000Z",
            endTime: "2023-11-07T10:15:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:10:00.000Z",
            endTime: "2023-11-07T10:20:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:15:00.000Z",
            endTime: "2023-11-07T10:25:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:20:00.000Z",
            endTime: "2023-11-07T10:30:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:25:00.000Z",
            endTime: "2023-11-07T10:35:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:30:00.000Z",
            endTime: "2023-11-07T10:40:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:35:00.000Z",
            endTime: "2023-11-07T10:45:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:40:00.000Z",
            endTime: "2023-11-07T10:50:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:45:00.000Z",
            endTime: "2023-11-07T10:55:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:50:00.000Z",
            endTime: "2023-11-07T11:00:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T10:55:00.000Z",
            endTime: "2023-11-07T11:05:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:00:00.000Z",
            endTime: "2023-11-07T11:10:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:05:00.000Z",
            endTime: "2023-11-07T11:15:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:10:00.000Z",
            endTime: "2023-11-07T11:20:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:15:00.000Z",
            endTime: "2023-11-07T11:25:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:20:00.000Z",
            endTime: "2023-11-07T11:30:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:25:00.000Z",
            endTime: "2023-11-07T11:35:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:30:00.000Z",
            endTime: "2023-11-07T11:40:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:35:00.000Z",
            endTime: "2023-11-07T11:45:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:40:00.000Z",
            endTime: "2023-11-07T11:50:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:45:00.000Z",
            endTime: "2023-11-07T11:55:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:50:00.000Z",
            endTime: "2023-11-07T12:00:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
          {
            startTime: "2023-11-07T11:55:00.000Z",
            endTime: "2023-11-07T12:05:00.000Z",
            technologist: "Dr. Rob Mayer",
          },
        ],
        nonAvailableTimesForModality: [],
      },
    ],
    procedure: {
      procedureName: "CT of Brain",
      modalityType: "CT",
    },
    combinedSlots: [
      {
        startTime: "2023-11-07T10:00:00.000Z",
        endTime: "2023-11-07T10:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T10:15:00.000Z",
        endTime: "2023-11-07T10:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T10:30:00.000Z",
        endTime: "2023-11-07T10:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T10:45:00.000Z",
        endTime: "2023-11-07T10:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T11:00:00.000Z",
        endTime: "2023-11-07T11:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T11:15:00.000Z",
        endTime: "2023-11-07T11:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T11:30:00.000Z",
        endTime: "2023-11-07T11:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T11:45:00.000Z",
        endTime: "2023-11-07T11:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T12:00:00.000Z",
        endTime: "2023-11-07T12:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T12:15:00.000Z",
        endTime: "2023-11-07T12:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T12:30:00.000Z",
        endTime: "2023-11-07T12:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T12:45:00.000Z",
        endTime: "2023-11-07T12:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T13:00:00.000Z",
        endTime: "2023-11-07T13:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T13:15:00.000Z",
        endTime: "2023-11-07T13:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T13:30:00.000Z",
        endTime: "2023-11-07T13:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T13:45:00.000Z",
        endTime: "2023-11-07T13:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T14:00:00.000Z",
        endTime: "2023-11-07T14:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T14:15:00.000Z",
        endTime: "2023-11-07T14:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T14:30:00.000Z",
        endTime: "2023-11-07T14:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T14:45:00.000Z",
        endTime: "2023-11-07T14:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T15:00:00.000Z",
        endTime: "2023-11-07T15:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T15:15:00.000Z",
        endTime: "2023-11-07T15:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T15:30:00.000Z",
        endTime: "2023-11-07T15:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T15:45:00.000Z",
        endTime: "2023-11-07T15:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T16:00:00.000Z",
        endTime: "2023-11-07T16:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T16:15:00.000Z",
        endTime: "2023-11-07T16:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T16:30:00.000Z",
        endTime: "2023-11-07T16:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T16:45:00.000Z",
        endTime: "2023-11-07T16:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T17:00:00.000Z",
        endTime: "2023-11-07T17:10:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T17:15:00.000Z",
        endTime: "2023-11-07T17:25:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T17:30:00.000Z",
        endTime: "2023-11-07T17:40:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T17:45:00.000Z",
        endTime: "2023-11-07T17:55:00.000Z",
        technologist: "Dr. Link Mayer",
      },
      {
        startTime: "2023-11-07T10:00:00.000Z",
        endTime: "2023-11-07T10:10:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:05:00.000Z",
        endTime: "2023-11-07T10:15:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:10:00.000Z",
        endTime: "2023-11-07T10:20:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:15:00.000Z",
        endTime: "2023-11-07T10:25:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:20:00.000Z",
        endTime: "2023-11-07T10:30:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:25:00.000Z",
        endTime: "2023-11-07T10:35:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:30:00.000Z",
        endTime: "2023-11-07T10:40:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:35:00.000Z",
        endTime: "2023-11-07T10:45:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:40:00.000Z",
        endTime: "2023-11-07T10:50:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:45:00.000Z",
        endTime: "2023-11-07T10:55:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:50:00.000Z",
        endTime: "2023-11-07T11:00:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T10:55:00.000Z",
        endTime: "2023-11-07T11:05:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:00:00.000Z",
        endTime: "2023-11-07T11:10:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:05:00.000Z",
        endTime: "2023-11-07T11:15:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:10:00.000Z",
        endTime: "2023-11-07T11:20:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:15:00.000Z",
        endTime: "2023-11-07T11:25:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:20:00.000Z",
        endTime: "2023-11-07T11:30:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:25:00.000Z",
        endTime: "2023-11-07T11:35:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:30:00.000Z",
        endTime: "2023-11-07T11:40:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:35:00.000Z",
        endTime: "2023-11-07T11:45:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:40:00.000Z",
        endTime: "2023-11-07T11:50:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:45:00.000Z",
        endTime: "2023-11-07T11:55:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:50:00.000Z",
        endTime: "2023-11-07T12:00:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
      {
        startTime: "2023-11-07T11:55:00.000Z",
        endTime: "2023-11-07T12:05:00.000Z",
        technologist: "Dr. Rob Mayer",
      },
    ],
  },
];

const modalities = [
  {
    modalityName: "MRI 1.5 T",
    rrule:
      "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=8,9,10,11,12,13,14,15,16,17;BYMINUTE=15,30,45,0;BYSECOND=0",
    duration: 15, // Duration in minutes
    modalityType: "MRI",
  },
  {
    modalityName: "MRI 3 T",
    // Similar to the above, this rule handles occurrences from 8 AM to 12 PM and from 3 PM to 7 PM.
    rrule:
      "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=8,9,10,11;BYMINUTE=0,5,10,15,20,25,30,35,40,45,50,55;BYSECOND=0",
    duration: 10, // Duration of the procedure on this modality.
    // modalityType: "MRI",
    modalityType: "MRI1",
  },
  {
    modalityName: "CT1",
    rrule:
      "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=10,11,12,13,14,15,16,17;BYMINUTE=15,30,45,0;BYSECOND=0",
    duration: 10, // Duration in minutes
    modalityType: "CT",
  },
  {
    modalityName: "CT2",
    // Similar to the above, this rule handles occurrences from 8 AM to 12 PM and from 3 PM to 7 PM.
    rrule:
      "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=10,11;BYMINUTE=0,5,10,15,20,25,30,35,40,45,50,55;BYSECOND=0",
    duration: 10, // Duration of the procedure on this modality.
    modalityType: "CT",
  },
  // Add other modalities as needed
];

const technologistAssignments = [
  {
    modalityName: "MRI 1.5 T",
    assignments: [
      {
        date: "2023-10-31",
        technologist: "Dr. John Doe",
      },
      {
        date: "2023-11-01",
        technologist: "Dr. Jane Doe",
      },
      {
        date: "2023-11-03",
        technologist: "Dr. John Doe",
      },
      {
        date: "2023-11-04",
        technologist: "Dr. Jane Doe",
      },
      {
        date: "2023-11-07",
        technologist: "Dr. John Doe",
      },
      // ... other days
    ],
  },
  {
    modalityName: "MRI 3 T",
    assignments: [
      {
        date: "2023-10-31",
        technologist: "Dr. John Mayer",
      },
      {
        date: "2023-11-01",
        technologist: "Dr. Jane Mayer",
      },

      // ... other days
    ],
  },
  {
    modalityName: "CT1",
    assignments: [
      {
        date: "2023-10-31",
        technologist: "Dr. Rob Mayer",
      },
      {
        date: "2023-11-01",
        technologist: "Dr. Jane Doe",
      },
      {
        date: "2023-11-03",
        technologist: "Dr. Link Mayer",
      },
      {
        date: "2023-11-07",
        technologist: "Dr. Link Mayer",
      },
      // ... other days
    ],
  },
  {
    modalityName: "CT2",
    assignments: [
      {
        date: "2023-10-31",
        technologist: "Dr. David Doe",
      },
      {
        date: "2023-11-01",
        technologist: "Dr. Jane Mayer",
      },
      {
        date: "2023-11-07",
        technologist: "Dr. Rob Mayer",
      },
      // ... other days
    ],
  },
  // ... other modalities
];

const technologistProcedures = [
  {
    technologist: "Dr. John Doe",
    procedures: ["MRI of Chest", "MRI of Brain"], // List of procedures this technologist can handle
  },
  {
    technologist: "Dr. Jane Mayer",
    procedures: ["MRI of Chest", "MRI of Brain"], // List of procedures this technologist can handle
  },
  {
    technologist: "Dr. John Mayer",
    procedures: ["MRI of Chest", "MRI of Brain"], // List of procedures this technologist can handle
  },
  {
    technologist: "Dr. David Doe",
    procedures: ["CT of Chest", "CT of Brain"], // List of procedures this technologist can handle
  },
  {
    technologist: "Dr. Rob Mayer",
    procedures: ["CT of Chest", "CT of Brain"], // List of procedures this technologist can handle
  },
  {
    technologist: "Dr. Link Mayer",
    procedures: ["CT of Chest", "CT of Brain"], // List of procedures this technologist can handle
  },
  // ... other technologists
];

let procedureRequested = [
  { procedureName: "MRI of Chest", modalityType: "MRI" },
  { procedureName: "CT of Brain", modalityType: "CT" },
];
function canTechnologistHandleProcedure(technologistName, procedureName) {
  const technologistEntry = technologistProcedures.find(
    (t) => t.technologist === technologistName
  );
  if (!technologistEntry) return false;
  return technologistEntry.procedures.includes(procedureName);
}

function findTechnologistForModality(modalityName, date) {
  const modality = technologistAssignments.find(
    (mod) => mod.modalityName === modalityName
  );
  if (!modality) return null;

  const assignment = modality.assignments.find(
    (ass) => ass.date === date.toISOString().split("T")[0]
  );
  return assignment ? assignment.technologist : null;
}

function findAvailableSlots(inputDate, procedure) {
  let availableSlots = [];
  for (let modality of modalities) {
    // const modality = modalities.find(m => m.modalityName === modalityName);
    if (!modality || procedure.modalityType !== modality.modalityType) continue;

    // console.log("found modalities", modality.modalityName);
    const ruleset = rrule.fromString(modality.rrule);

    // console.log("ruleset", ruleset);
    let startOfDay = new Date(inputDate);
    startOfDay.setHours(0, 0, 0, 0);
    let endOfDay = new Date(inputDate);
    endOfDay.setHours(23, 59, 0, 0);

    let slots = ruleset.between(startOfDay, endOfDay, true);

    // console.log("slots ", slots);
    let availableTimes = slots.map((slot) => {
      return {
        startTime: slot,
        endTime: new Date(slot.getTime() + modality.duration * 60000),
        technologist: findTechnologistForModality(modality.modalityName, slot),
      };
    });
    // console.log("availableTimes ", availableTimes);
    // filer based on the tech
    availableTimes = availableTimes.filter((timeSlot) => {
      // TODO WHY ARE WE CHECKING STARTTIME AND ENDTIME?
      return (
        timeSlot.startTime >= startOfDay &&
        timeSlot.endTime <= endOfDay &&
        canTechnologistHandleProcedure(
          timeSlot.technologist,
          procedure.procedureName
        )
      );
    });
    // console.log("availableTimes ", availableTimes);

    // TODO this is duplicate
    // Make sure to filter the slots based on the end time
    availableTimes = availableTimes.filter((timeSlot) => {
      return timeSlot.startTime >= startOfDay && timeSlot.endTime <= endOfDay;
    });
    let allTimes = ruleset.between(startOfDay, endOfDay, true);
    let nonAvailableTimesForModality = allTimes.filter((time) => {
      // Check if the time is not included in any of the available times
      return !availableTimes.some((availableSlot) => {
        return time >= availableSlot.startTime && time < availableSlot.endTime;
      });
    });
    // availableTimes.sort(
    //   (a, b) => new Date(a.startTime) < new Date(b.startTime)
    // );
    // Add the modality's available times to the results array.
    availableSlots.push({
      modalityName: modality.modalityName,
      // availableTimes: availableTimes,
      availableTimes: availableTimes.sort(
        (a, b) => new Date(a.startTime) - new Date(b.startTime)
      ),
      nonAvailableTimesForModality,
    });
    // console.log("availableSlots ", availableSlots);
  }

  return availableSlots;
}
function suggestSlots(schedule) {
  // Create an array to store available slots with their durations
  const slotsWithDuration = [];

  // Iterate over each modality in the schedule
  // for (const modality of schedule) {
  //   // Iterate over each slot in the modality
  //   for (const slot of modality.slots) {
  //     // Calculate the duration of each slot
  //     const startTime = new Date(slot.startTime);
  //     const endTime = new Date(slot.endTime);
  //     const duration = Math.abs(endTime - startTime) / (1000 * 60); // Duration in minutes
  //     console.log(startTime);
  //     // Store the slot along with its duration
  //     slotsWithDuration.push({ slot, duration });
  //   }
  // }
  for (const modality of schedule[0].slots) {
    // Iterate over each slot in the modality
    for (const slot of modality.availableTimes) {
      // Calculate the duration of each slot
      const startTime = new Date(slot.startTime);
      const endTime = new Date(slot.endTime);
      const duration = Math.abs(endTime - startTime) / (1000 * 60); // Duration in minutes
      console.log(startTime);
      // Store the slot along with its duration
      slotsWithDuration.push({ slot, duration });
    }
  }

  console.log("slotsWithDuration", JSON.stringify(slotsWithDuration));

  // Sort slots by duration in ascending order
  slotsWithDuration.sort((a, b) => a.duration - b.duration);

  // Get the first three slots with the lowest duration
  const suggestedSlots = slotsWithDuration.slice(0, 3);
  console.log("suggestedSlots", JSON.stringify(suggestedSlots));

  // Return the suggested slots
  return suggestedSlots.map(({ slot }) => slot);
}

function findBestSlots(procedures) {
  let bestCombinations = [];
  let minWaitingTime = Number.MAX_SAFE_INTEGER;

  function findSlotsForProcedure(index, currentSlots, currentWaitingTime) {
    if (index === procedures.length) {
      if (currentWaitingTime < minWaitingTime) {
        minWaitingTime = currentWaitingTime;
        bestCombinations = [currentSlots];
      } else if (currentWaitingTime === minWaitingTime) {
        bestCombinations.push(currentSlots);
      }
      return;
    }

    const availableSlots = procedures[index].slots;
    for (const slot of availableSlots) {
      const lastSlot = currentSlots[currentSlots.length - 1];
      const waitingTime = lastSlot
        ? new Date(slot.date) - new Date(lastSlot.endDate)
        : 0;

      if (currentWaitingTime + waitingTime < minWaitingTime) {
        findSlotsForProcedure(
          index + 1,
          [...currentSlots, slot],
          currentWaitingTime + waitingTime
        );
      }
    }
  }

  findSlotsForProcedure(0, [], 0);

  return bestCombinations.slice(0, 3);
}

let procedureSlots = [];

for (let procedure of procedureRequested) {
  // iterating through all the procedureRequested and finding AvailableSlots on a particular date
  let slots = findAvailableSlots(new Date("2023-11-07"), procedure);
  // let slots = findAvailableSlots(new Date("2023-10-31"), procedure);
  procedureSlots.push({
    slots,
    procedure,
  });
}
// Sample usage:
// console.log("procedureSlots", JSON.stringify(procedureSlots, null, 2));
const fs = require("fs");

response.forEach((appointment) => {
  appointment.combinedSlots = [];
  // COMBINE ALL THE AVAIALABLE TIMES INTO ONE ARRAYS FOR EACH SLOT
  appointment.slots.forEach((slot) => {
    appointment.combinedSlots.push(...slot.availableTimes);
  });
});
let possibleAppointments = [];

responseWithCombinedTime.forEach((appointment) => {
  // possibleAppointments.push
  tempPossibleAppoints.push([]);
  // appointment.combinedSlots.forEach((slot) => {
  //   possibleAppointments.push;
  // });
});

addSingleAppointment(0);

function addSingleAppointment(
  combinesAvailableTimesIndex,
  possibleAppointmentsIndex,
  end = false
) {
  if (end) return null;

  responseWithCombinedTime[combinesAvailableTimesIndex].combinedSlots.forEach(
    (slot) => {
      possibleAppointments;
    }
  );

  // let tempPossibleAppoints = [];

  // responseWithCombinedTime.forEach((appointment) => {
  //   // possibleAppointments.push
  //   // tempPossibleAppoints.push()
  //   appointment.combinedSlots.forEach((slot) => {});
  // });
}

fs.writeFile(
  "./output.json",
  JSON.stringify(response, null, 2),

  (err) => {
    if (err) {
      console.error(err);
    } else {
    }
  }
);
// const suggestedSlots = suggestSlots(procedureSlots);
// console.log("suggestedSlots", JSON.stringify(suggestedSlots));

// // Find the best slot combinations
// const bestSlots = findBestSlots(procedureSlots);
// console.log(JSON.stringify(bestSlots));
