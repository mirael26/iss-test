import {PhoneProperties, UpdateDisplayedPhones, ChangePhonesAmount} from "../types";

export const ActionType = {
  UPDATE_DISPLAYED_PHONES: "UPDATE_DISPLAYED_PHONES",
  CHANGE_PHONES_AMOUNT: "CHANGE_PHONES_AMOUNT",
} as const;

export const ActionCreator = {
  updateDisplayedPhones: (displayedPhones: Array<PhoneProperties>): UpdateDisplayedPhones => ({
    type: ActionType.UPDATE_DISPLAYED_PHONES,
    payload: displayedPhones
  }),
  
  changePhonesAmount: (amount: number): ChangePhonesAmount  => ({
    type: ActionType.CHANGE_PHONES_AMOUNT,
    payload: amount
  })
};