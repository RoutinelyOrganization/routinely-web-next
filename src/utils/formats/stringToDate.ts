type StringToDateOutput = {
  day: number;
  month: number;
  year: number;
  shortDateString: string;
  longDateString: string;
  weekDay: string;
  timestamp: number;
};

export const stringToDate = (date?: string): StringToDateOutput => {
  const now = date ? new Date(date) : new Date();
  const day = now.getUTCDate();
  const month = now.getUTCMonth() + 1;
  const year = now.getUTCFullYear();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const nowShortStr = `${year}-${month.toString().padStart(2, '0')}-${day}`;
  const nowLongStr = `${year}-${month.toString().padStart(2, '0')}-${day} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return {
    day,
    month,
    year,
    shortDateString: nowShortStr,
    longDateString: nowLongStr,
    weekDay: new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'UTC' }).format(now),
    timestamp: now.getTime(),
  };
};
