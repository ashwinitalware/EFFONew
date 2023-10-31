const rrule = require("rrule").RRule;

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
    modalityType: "MRI",
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

    const ruleset = rrule.fromString(modality.rrule);

    let startOfDay = new Date(inputDate);
    startOfDay.setHours(0, 0, 0, 0);
    let endOfDay = new Date(inputDate);
    endOfDay.setHours(23, 59, 0, 0);

    let slots = ruleset.between(startOfDay, endOfDay, true);

    let availableTimes = slots.map((slot) => {
      return {
        startTime: slot,
        endTime: new Date(slot.getTime() + modality.duration * 60000),
        technologist: findTechnologistForModality(modality.modalityName, slot),
      };
    });

    // filer based on the tech
    availableTimes = availableTimes.filter((timeSlot) => {
      return (
        timeSlot.startTime >= startOfDay &&
        timeSlot.endTime <= endOfDay &&
        canTechnologistHandleProcedure(
          timeSlot.technologist,
          procedure.procedureName
        )
      );
    });

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

    // Add the modality's available times to the results array.
    availableSlots.push({
      modalityName: modality.modalityName,
      availableTimes: availableTimes,
      nonAvailableTimesForModality,
    });
  }

  return availableSlots;
}
function suggestSlots(schedule) {
  // Create an array to store available slots with their durations
  const slotsWithDuration = [];

  // Iterate over each modality in the schedule
  for (const modality of schedule) {
    // Iterate over each slot in the modality
    for (const slot of modality.slots) {
      // Calculate the duration of each slot
      const startTime = new Date(slot.startTime);
      const endTime = new Date(slot.endTime);
      const duration = Math.abs(endTime - startTime) / (1000 * 60); // Duration in minutes

      // Store the slot along with its duration
      slotsWithDuration.push({ slot, duration });
    }
  }

  // Sort slots by duration in ascending order
  slotsWithDuration.sort((a, b) => a.duration - b.duration);

  // Get the first three slots with the lowest duration
  const suggestedSlots = slotsWithDuration.slice(0, 3);

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
  let slots = findAvailableSlots(new Date("2023-10-31"), procedure);
  procedureSlots.push({
    slots,
    procedure,
  });
}
// Sample usage:
console.log(procedureSlots);

const suggestedSlots = suggestSlots(procedureSlots);
console.log(suggestedSlots);

// Find the best slot combinations
const bestSlots = findBestSlots(procedureSlots);
console.log(bestSlots);
