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


