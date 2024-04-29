import { CountryProp } from '../actions/layout.actions';
import { LayoutState } from './layout.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/******************* Base Layout State ******************/
export const getLayoutState = createFeatureSelector<LayoutState>('layout');

// ******************** Individual selectors ***************************
const fetchView = (state: LayoutState): boolean => state.isEnterpriseView;
const fetchCurrentCountry = (state: LayoutState): CountryProp => {
  return {countryName:state.currentCountry, countryFlag:state.countryFlag}
};

export const getlayoutStateJS = createSelector(
  getLayoutState,
  state => state
);

// *************************** PUBLIC API's ****************************
export const getView = createSelector(
  getLayoutState,
  fetchView
);

export const getCurrentCountry = createSelector(
  getLayoutState,
  fetchCurrentCountry
);