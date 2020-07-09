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
      return {
        ...state,
        startIndexOfSlotGames: 0,
        endIndexOfSlotGames: 5,
        filterValueForSlotGames: action.payload,
        filteredArrayForSlotGames:
          action.payload === ""
            ? state.fullArrayOfGames
            : filterArray(state.fullArrayOfGames, action.payload),
        displayedArrayOfSlotGames:
          action.payload === ""
            ? findByIndexes(
                state.fullArrayOfGames,
                state.startIndexOfSlotGames,
                state.endIndexOfSlotGames
              )
            : state.filteredArrayForSlotGames
            ? findByIndexes(
                state.filteredArrayForSlotGames,
                state.startIndexOfSlotGames,
                state.endIndexOfSlotGames
              )
            : findByIndexes(
                state.fullArrayOfGames,
                state.startIndexOfSlotGames,
                state.endIndexOfSlotGames
              ),
      };
    case GamesActionTypes.SET_FILTER_VALUE_FOR_VIDEO_POKER:
      return {
        ...state,
        startIndexOfVideoPoker: 0,
        endIndexOfVideoPoker: 5,
        filterValueForVideoPoker: action.payload,
        filteredArrayForVideoPoker:
          action.payload === ""
            ? state.fullArrayOfGames
            : filterArray(state.fullArrayOfGames, action.payload),
        displayedArrayOfVideoPoker:
          action.payload === ""
            ? findByIndexes(
                state.fullArrayOfGames,
                state.startIndexOfVideoPoker,
                state.endIndexOfVideoPoker
              )
            : state.filteredArrayForVideoPoker
            ? findByIndexes(
                state.filteredArrayForVideoPoker,
                state.startIndexOfVideoPoker,
                state.endIndexOfVideoPoker
              )
            : findByIndexes(
                state.fullArrayOfGames,
                state.startIndexOfVideoPoker,
                state.endIndexOfVideoPoker
              ),
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
      return {
        ...state,
        displayedArrayOfSlotGames:
          findDisplayedArray(
            state.fullArrayOfGames,
            state.filteredArrayForSlotGames,
            state.startIndexOfSlotGames,
            state.endIndexOfSlotGames,
            action.payload
          ) !== null
            ? findDisplayedArray(
                state.fullArrayOfGames,
                state.filteredArrayForSlotGames,
                state.startIndexOfSlotGames,
                state.endIndexOfSlotGames,
                action.payload
              )
            : state.displayedArrayOfSlotGames,
        startIndexOfSlotGames:
          findDisplayedArray(
            state.fullArrayOfGames,
            state.filteredArrayForSlotGames,
            state.startIndexOfSlotGames,
            state.endIndexOfSlotGames,
            action.payload
          ) !== null
            ? state.startIndexOfSlotGames + 1
            : state.startIndexOfSlotGames,
        endIndexOfSlotGames:
          findDisplayedArray(
            state.fullArrayOfGames,
            state.filteredArrayForSlotGames,

            state.startIndexOfSlotGames,
            state.endIndexOfSlotGames,
            action.payload
          ) !== null
            ? state.endIndexOfSlotGames + 1
            : state.endIndexOfSlotGames,
      };
    case GamesActionTypes.MOVE_GAMES_FOR_VIDEO_POKER:
      return {
        ...state,
        displayedArrayOfVideoPoker:
          findDisplayedArray(
            state.fullArrayOfGames,
            state.filteredArrayForVideoPoker,
            state.startIndexOfVideoPoker,
            state.endIndexOfVideoPoker,
            action.payload
          ) !== null
            ? findDisplayedArray(
                state.fullArrayOfGames,
                state.filteredArrayForVideoPoker,
                state.startIndexOfVideoPoker,
                state.endIndexOfVideoPoker,
                action.payload
              )
            : state.displayedArrayOfVideoPoker,
        startIndexOfVideoPoker:
          findDisplayedArray(
            state.fullArrayOfGames,
            state.filteredArrayForVideoPoker,

            state.startIndexOfVideoPoker,
            state.endIndexOfVideoPoker,
            action.payload
          ) !== null
            ? state.startIndexOfVideoPoker + 1
            : state.startIndexOfVideoPoker,
        endIndexOfVideoPoker:
          findDisplayedArray(
            state.fullArrayOfGames,
            state.filteredArrayForVideoPoker,

            state.startIndexOfVideoPoker,
            state.endIndexOfVideoPoker,
            action.payload
          ) !== null
            ? state.endIndexOfVideoPoker + 1
            : state.endIndexOfVideoPoker,
      };
    default:
      return state;
  }
};

export default gameReducer;
