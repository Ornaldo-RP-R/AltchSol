import GamesActionTypes from "./Games.types";
export const editFullArray = (fullArray) => ({
  type: GamesActionTypes.EDIT_FULL_ARRAY_OF_GAMES,
  payload: fullArray,
});
export const editDisplayedArrayForSlotGames = (displayedArray) => ({
  type: GamesActionTypes.EDIT_DISPLAYED_ARRAY_OF_GAMES_FOR_SLOT_GAMES,
  payload: displayedArray,
});
export const editDisplayedArrayForVideoPoker = (displayedArray) => ({
  type: GamesActionTypes.EDIT_DISPLAYED_ARRAY_OF_GAMES_FOR_VIDEO_POKER,
  payload: displayedArray,
});
export const moveGamesForVideoPoker = (Increment) => ({
  type: GamesActionTypes.MOVE_GAMES_FOR_VIDEO_POKER,
  payload: Increment,
});
export const moveGamesForSlotGames = (Increment) => ({
  type: GamesActionTypes.MOVE_GAMES_FOR_SLOT_GAMES,
  payload: Increment,
});
export const setStartIndexForSlotGames = (Index) => ({
  type: GamesActionTypes.SET_FIRST_INDEX_OF_SLOT_GAMES,
  payload: Index,
});
export const setLastIndexForSlotGames = (Index) => ({
  type: GamesActionTypes.SET_LAST_INDEX_OF_SLOT_GAMES,
  payload: Index,
});
export const setStartIndexForVideoPoker = (Index) => ({
  type: GamesActionTypes.SET_FIRST_INDEX_OF_VIDEO_POKER,
  payload: Index,
});
export const setLastIndexForVideoPoker = (Index) => ({
  type: GamesActionTypes.SET_LAST_INDEX_OF_VIDEO_POKER,
  payload: Index,
});
export const setFilterValueForSlotGames = (FilterValue) => ({
  type: GamesActionTypes.SET_FILTER_VALUE_FOR_SLOT_GAMES,
  payload: FilterValue,
});
export const setFilterValueForVideoGames = (FilterValue) => ({
  type: GamesActionTypes.SET_FILTER_VALUE_FOR_VIDEO_POKER,
  payload: FilterValue,
});
