import { Action, State } from "../types";
import { ActionType } from "./action";
import { phonesMocks } from "../mocks";

const initialState: State = {
  phones: phonesMocks,
  displayedPhones: [],
  phonesAmount: 3,
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.UPDATE_DISPLAYED_PHONES:
      return {...state, displayedPhones: action.payload};
    case ActionType.CHANGE_PHONES_AMOUNT:
      return {...state, phonesAmount: action.payload};
    default:
      return state;
  }
};