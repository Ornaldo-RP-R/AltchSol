import GamesActionTypes from "./Games.types";
import {
  findDisplayedArray,
  filterArray,
  findByIndexes,
} from "./Games.utility";
const INITIAL_STATE = {
  fullArrayOfGames: null,
  filteredArrayForSlotGames: null,
  filteredArrayForVideoPoker: null,

  displayedArrayOfSlotGames: null,
  displayedArrayOfVideoPoker: null,
  startIndexOfSlotGames: 0,
  endIndexOfSlotGames: 5,
  startIndexOfVideoPoker: 0,
  endIndexOfVideoPoker: 5,
  filterValueForSlotGames: "",
  filterValueForVideoPoker: "",
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GamesActionTypes.SET_FILTER_VALUE_FOR_SLOT_GAMES:
      const filteredArray = filterArray(state.fullArrayOfGames, action.payload);
      const arrayFindByIndex = findByIndexes(
        state.fullArrayOfGames,
        state.startIndexOfSlotGames,
        state.endIndexOfSlotGames
      );
      return {
        ...state,
        startIndexOfSlotGames: 0,
        endIndexOfSlotGames: 5,
        filterValueForSlotGames: action.payload,
        filteredArrayForSlotGames:
          action.payload === "" ? state.fullArrayOfGames : filteredArray,
        displayedArrayOfSlotGames:
          action.payload === ""
            ? arrayFindByIndex
            : filteredArray
            ? findDisplayedArray(
                state.fullArrayOfGames,
                filteredArray,
                0,
                5,
                action.payload
              )
            : arrayFindByIndex,
      };
    case GamesActionTypes.SET_FILTER_VALUE_FOR_VIDEO_POKER:
      const filteredArrayForVideoP = filterArray(
        state.fullArrayOfGames,
        action.payload
      );
      const FindByIndex = findByIndexes(
        state.fullArrayOfGames,
        state.startIndexOfVideoPoker,
        state.endIndexOfVideoPoker
      );
      return {
        ...state,
        startIndexOfVideoPoker: 0,
        endIndexOfVideoPoker: 5,
        filterValueForVideoPoker: action.payload,
        filteredArrayForVideoPoker:
          action.payload === ""
            ? state.fullArrayOfGames
            : filteredArrayForVideoP,
        displayedArrayOfVideoPoker:
          action.payload === ""
            ? FindByIndex
            : filteredArrayForVideoP
            ? findDisplayedArray(
                state.fullArrayOfGames,
                filteredArrayForVideoP,
                0,
                5,
                action.payload
              )
            : FindByIndex,
      };
    case GamesActionTypes.SET_FIRST_INDEX_OF_SLOT_GAMES:
      return {
        ...state,
        startIndexOfSlotGames: action.payload,
      };
    case GamesActionTypes.SET_FIRST_INDEX_OF_VIDEO_POKER:
      return {
        ...state,
        startIndexOfVideoPoker: action.payload,
      };
    case GamesActionTypes.SET_LAST_INDEX_OF_SLOT_GAMES:
      return {
        ...state,
        endIndexOfSlotGames: action.payload,
      };
    case GamesActionTypes.SET_LAST_INDEX_OF_VIDEO_POKER:
      return {
        ...state,
        endIndexOfVideoPoker: action.payload,
      };

    case GamesActionTypes.EDIT_FULL_ARRAY_OF_GAMES:
      return {
        ...state,
        fullArrayOfGames: action.payload,
      };
    case GamesActionTypes.EDIT_DISPLAYED_ARRAY_OF_GAMES_FOR_SLOT_GAMES:
      return {
        ...state,
        displayedArrayOfSlotGames: action.payload,
      };
    case GamesActionTypes.EDIT_DISPLAYED_ARRAY_OF_GAMES_FOR_VIDEO_POKER:
      return {
        ...state,
        displayedArrayOfVideoPoker: action.payload,
      };
    case GamesActionTypes.MOVE_GAMES_FOR_SLOT_GAMES:
      const displayedArray = findDisplayedArray(
        state.fullArrayOfGames,
        state.filteredArrayForSlotGames,
        state.startIndexOfSlotGames,
        state.endIndexOfSlotGames,
        action.payload
      );
      const newStartIndexOfSlotGames =
        displayedArray !== null
          ? action.payload === true
            ? state.startIndexOfSlotGames + 1
            : state.startIndexOfSlotGames - 1
          : state.startIndexOfSlotGames;
      const newEndIndexOfSlotGames =
        displayedArray !== null
          ? action.payload === true
            ? state.endIndexOfSlotGames + 1
            : state.endIndexOfSlotGames - 1
          : state.endIndexOfSlotGames;
      const newDisplayedArray = findDisplayedArray(
        state.fullArrayOfGames,
        state.filteredArrayForSlotGames,
        newStartIndexOfSlotGames,
        newEndIndexOfSlotGames,
        action.payload
      );
      return {
        ...state,
        displayedArrayOfSlotGames:
          newDisplayedArray !== null
            ? newDisplayedArray
            : state.displayedArrayOfSlotGames,
        startIndexOfSlotGames:
          newDisplayedArray !== null
            ? newStartIndexOfSlotGames
            : state.startIndexOfSlotGames,
        endIndexOfSlotGames:
          newDisplayedArray !== null
            ? newEndIndexOfSlotGames
            : state.endIndexOfSlotGames,
      };
    case GamesActionTypes.MOVE_GAMES_FOR_VIDEO_POKER:
      const DisplayedArray = findDisplayedArray(
        state.fullArrayOfGames,
        state.filteredArrayForVideoPoker,
        state.startIndexOfVideoPoker,
        state.endIndexOfVideoPoker,
        action.payload
      );
      const newstartIndexOfVideoPoker =
        DisplayedArray !== null
          ? action.payload === true
            ? state.startIndexOfVideoPoker + 1
            : state.startIndexOfVideoPoker - 1
          : state.startIndexOfVideoPoker;
      const newendIndexOfVideoPoker =
        DisplayedArray !== null
          ? action.payload === true
            ? state.endIndexOfVideoPoker + 1
            : state.endIndexOfVideoPoker - 1
          : state.endIndexOfVideoPoker;

      const newDisplayedArrayP = findDisplayedArray(
        state.fullArrayOfGames,
        state.filteredArrayForVideoPoker,
        newstartIndexOfVideoPoker,
        newendIndexOfVideoPoker,
        action.payload
      );
      return {
        ...state,
        displayedArrayOfVideoPoker:
          newDisplayedArrayP !== null
            ? newDisplayedArrayP
            : state.displayedArrayOfVideoPoker,
        startIndexOfVideoPoker:
          newDisplayedArrayP !== null
            ? newstartIndexOfVideoPoker
            : state.startIndexOfVideoPoker,
        endIndexOfVideoPoker:
          newDisplayedArrayP !== null
            ? newendIndexOfVideoPoker
            : state.endIndexOfVideoPoker,
      };
    default:
      return state;
  }
};

export default gameReducer;
