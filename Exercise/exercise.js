function calculateVAT(price) {
  if (price <= 0 || typeof price !== "number") {
    return "Invalid";
  } else {
    return (price * 7.5) / 100;
  }
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  let isTrue = true;
  const sliced = contact.slice(0, 2);
  const hasSpaces = contact.includes(" ");
  let numeric_check = true;
  for (number of num) {
    if (num[number] >= "0" && num[number] <= "9") {
      numeric_check = true;
    } else {
      numeric_check = false;
      break;
    }
  }

  if (
    contact.length !== 11 ||
    sliced !== "01" ||
    hasSpaces === true ||
    numeric_check !== true
  ) {
    isTrue = false;
    return isTrue;
  } else {
    return isTrue;
  }
}

function willSuccess(marks) {
  let fail = 0;
  let pass = 0;
  if (typeof marks == "object") {
    for (let i = 0; i < marks.length; i++) {
      if (typeof marks[i] !== "number") {
        return "Invalid";
      }
    }
  } else {
    return "Invalid";
  }

  for (const mark of marks) {
    if (mark < 50) {
      fail++;
    } else {
      pass++;
    }
  }

  if (pass > fail) {
    return true;
  } else return false;
}

function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  let condition = true;
  ageDifference = person1.age - person2.age;
  ageDifferenceUnsigned = Math.abs(ageDifference);

  if (person1.gender === person2.gender || ageDifferenceUnsigned > 7) {
    condition = false;
    return condition;
  } else {
    return condition;
  }
}

function calculateSleepTime(times) {
  for (const time of times) {
    if (typeof time != "number") return "Invalid";
  }

  totalTime = 0;
  for (sec of times) {
    totalTime += sec;
  }

  hours = Math.floor(totalTime / 3600);
  minutes = Math.floor((totalTime % 3600) / 60);
  seconds = totalTime % 60;

  const convertedTime = {
    hour: hours,
    minute: minutes,
    second: seconds,
  };
  return convertedTime;
}
