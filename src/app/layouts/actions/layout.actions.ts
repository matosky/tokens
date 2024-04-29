import { Action } from '@ngrx/store';
import { LayoutState } from '../reducers/layout.state';

export type CountryProp = {
  countryName:string;
  countryFlag:string;
}
export enum LayoutActionTypes {
  LoadLayouts = '[Layout] Load Layouts',
  ToggleView = '[Layout] Toggle View',
  SwitchCountry = '[Layout] Switch Country',
  /*  HideMobileSearchBar = '[Layout] Hide Mobile Search Bar',
  ShowMobileSearchBar = '[Layout] Show Mobile Search Bar',
  HideMobileMainMenu = '[Layout] Hide Mobile Main Menu',
  ShowMobileMainMenu = '[Layout] Show Mobile Main Menu' */
}

export class LoadLayouts implements Action {
  readonly type = LayoutActionTypes.LoadLayouts;

  constructor(public payload: LayoutState) {}
}
export class ToggleView implements Action {
  readonly type = LayoutActionTypes.ToggleView;
  constructor(public payload: any) {}
}

export class SwitchCountry implements Action {
  readonly type = LayoutActionTypes.SwitchCountry;
  constructor(public payload: CountryProp) {} // Assuming payload is an object with a country code
}
/* export class HideMobileSearchBar implements Action {
  readonly type = LayoutActionTypes.HideMobileSearchBar;
}

export class ShowMobileSearchBar implements Action {
  readonly type = LayoutActionTypes.ShowMobileSearchBar;
}

export class ShowMobileMainMenu implements Action {
  readonly type = LayoutActionTypes.ShowMobileMainMenu;
}

export class HideMobileMainMenu implements Action {
  readonly type = LayoutActionTypes.HideMobileMainMenu;
} */

export type LayoutActions = LoadLayouts | ToggleView | SwitchCountry;
