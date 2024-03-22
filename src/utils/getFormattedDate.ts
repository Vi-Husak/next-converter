export function getFormattedDate(days: number = 0): string {
  const today: Date = new Date();
  today.setDate(today.getDate() + days);
  const year: number = today.getFullYear();
  const month: string = String(today.getMonth() + 1).padStart(2, "0");
  const day: string = String(today.getDate()).padStart(2, "0");
  const formattedDate: string = `${year}-${month}-${day}`;

  return formattedDate;
}
