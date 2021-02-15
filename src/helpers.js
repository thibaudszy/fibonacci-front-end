export const incrementLastElementToDisplay = (
  lastElementToDisplay,
  setlastElementToDisplay,
  queryHistoryLength
) => {
  if (lastElementToDisplay >= queryHistoryLength) {
    return;
  }
  setlastElementToDisplay(lastElementToDisplay + 1);
};
export const decrementLastElementToDisplay = (
  lastElementToDisplay,
  setlastElementToDisplay
) => {
  if (lastElementToDisplay < 2) {
    return;
  }
  setlastElementToDisplay(lastElementToDisplay - 1);
};
