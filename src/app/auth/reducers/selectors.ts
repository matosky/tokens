import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { AuthState } from './auth.state';
import { User } from '../../core/models/user';

// Base state function
const getAuthState = (state: AppState): AuthState => state.auth;

// ******************** Individual selectors ***************************
const fetchAuthStatus = (state: AuthState): boolean => state.isAuthenticated;
const fetchCurrentUser = (state: AuthState): User => state.currentUser;

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(
  getAuthState,
  fetchAuthStatus
);
export const getCurrentUser = createSelector(
  getAuthState,
  fetchCurrentUser
);
