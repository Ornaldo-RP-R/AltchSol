export const findDisplayedArray = (
  Fullarray,
  FilteredArray,
  startIndex,
  lastIndex,
  increment
) => {
  let ArrayToChose = FilteredArray ? FilteredArray : Fullarray;
  if (!Fullarray) {
    return null;
  }
  let displayedArray = [];
  if (
    (lastIndex >= ArrayToChose.length && increment === true) ||
    (increment === true && ArrayToChose.length <= 5)
  ) {
    return null;
  } else if (
    (increment === false && startIndex <= -1) ||
    (increment === false && ArrayToChose.length <= 5)
  ) {
    return null;
  }
  console.log(startIndex, lastIndex);

  for (let i = startIndex; i < lastIndex; i++) {
    if (ArrayToChose[i]) {
      displayedArray.push(ArrayToChose[i]);
    }
  }
  return displayedArray;
};
export const filterArray = (FullArray, FilterValue) => {
  if (!FullArray) {
    return null;
  }
  let newDisplayedArray = [];
  for (let i = 0; i < FullArray.length; i++) {
    if (FullArray[i].name.toLowerCase().includes(FilterValue.toLowerCase())) {
      newDisplayedArray.push(FullArray[i]);
    }
  }
  return newDisplayedArray;
};
export const findByIndexes = (Array, FirstIndex, LastIndex) => {
  if (!Array) {
    return null;
  }
  let LastIndexFixed = LastIndex > Array.length - 1 ? Array.length : LastIndex;
  let newArray = [];
  for (let i = FirstIndex; i < LastIndexFixed; i++) {
    newArray.push(Array[i]);
  }
  return newArray;
};
