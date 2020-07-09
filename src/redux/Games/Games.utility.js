export const findDisplayedArray = (
  Fullarray,
  FilteredArray,
  startIndex,
  lastIndex,
  increment
) => {
  let ArrayToChose = FilteredArray ? FilteredArray : Fullarray;
  let displayedArray = [];
  if (lastIndex === ArrayToChose.length - 1 && increment === true) {
    return null;
  } else if (increment === false && startIndex <= 0) {
    return null;
  }
  for (let i = startIndex + 1; i < lastIndex + 1; i++) {
    displayedArray.push(ArrayToChose[i]);
  }
  return displayedArray;
};
export const filterArray = (FullArray, FilterValue) => {
  let newDisplayedArray = [];
  for (let i = 0; i < FullArray.length; i++) {
    if (FullArray[i].name.toLowerCase().includes(FilterValue.toLowerCase())) {
      newDisplayedArray.push(FullArray[i]);
    }
  }
  return newDisplayedArray;
};
export const findByIndexes = (Array, FirstIndex, LastIndex) => {
  let newArray = [];
  for (let i = FirstIndex; i < LastIndex; i++) {
    newArray.push(Array[i]);
  }
  return newArray;
};
