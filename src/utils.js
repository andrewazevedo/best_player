const withLeadingZero = (amount) => {
  if (amount < 10) {
    return `${amount}`;
  }
  return `${amount}`;
};

const formatedTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - (minutes * 60);

  if (!minutes || !seconds) {
    return '';
  }

  return (`${minutes}:${withLeadingZero(seconds.toFixed(0))}`);
};


export { formatedTime };
