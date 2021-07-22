export const concat = (value: Array<string | null>): string =>
  value.filter(v => !!v).join(' ');
