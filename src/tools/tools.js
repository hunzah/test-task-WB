export const stringToNumber = (value) => parseInt(value.replace(/\s/g, ''), 10);
export const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const parseAndSum = (value, addition) => (parseInt(value.replace(/\s/g, ''), 10) + addition).toLocaleString();
