export const dateFormat = (date: string | Date): string => {
  const dateFormatted = date instanceof Date ? date : new Date(date);

  const year = dateFormatted.getFullYear();
  const month = (dateFormatted.getMonth() + 1).toString().padStart(2, '0');
  const day = dateFormatted.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const TimeFormat = (date: string | Date) => {
  const dateFormatted = date instanceof Date ? date : new Date(date);
  const hour = dateFormatted.getHours().toString().padStart(2, '0');
  const minutes = dateFormatted.getMinutes().toString().padStart(2, '0');

  return `${hour}:${minutes}`;
};
