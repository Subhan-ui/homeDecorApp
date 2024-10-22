export const useOrderItem = () => {
  function formatDate(isoString: string): string {
    const date = new Date(isoString);

    const day = date.getDate();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const month = monthNames[date.getMonth()];

    return `${month} ${day}`;
  }
  return {formatDate};
};
