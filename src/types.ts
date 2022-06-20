import { ActionType } from "./store/action";

// data

export interface PhoneProperties {
  id: number,
  name: string,
  image: string,
  brand: string,
  release: string,
  screenDiagonal: string,
  country: string,
  memorySize: string,
  screenRefreshRate: string,
  nfc: boolean,
  esimSupport: boolean,
  wirelessCharger: boolean,
  cost: string,
};

// state

export interface State {
  phones: Array<PhoneProperties> | [],
  displayedPhones: Array<PhoneProperties> | [],
  phonesAmount: number,
}

// actions

export interface UpdateDisplayedPhones {
  type: typeof ActionType.UPDATE_DISPLAYED_PHONES,
  payload: Array<PhoneProperties>
}

export interface ChangePhonesAmount {
  type: typeof ActionType.CHANGE_PHONES_AMOUNT,
  payload: number
}

export type Action = UpdateDisplayedPhones | ChangePhonesAmount;