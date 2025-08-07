type StringToDateOutput = {
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  shortDateString: string;
  longDateString: string;
  weekDay: string;
  timestamp: number;
};

export const stringToDate = (date?: string): StringToDateOutput => {
  const now = date ? new Date(date) : new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const nowShortStr = `${year}-${month.toString().padStart(2, '0')}-${day}`;
  const nowLongStr = `${year}-${month.toString().padStart(2, '0')}-${day} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return {
    day,
    month,
    year,
    hours,
    minutes,
    shortDateString: nowShortStr,
    longDateString: nowLongStr,
    weekDay: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now),
    timestamp: now.getTime(),
  };
};
