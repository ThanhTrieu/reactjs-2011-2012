import { createSelector } from 'reselect';

const userState = state => state.users;

export const loadingReselect = createSelector(
  userState,
  item => item.loading
);

export const userReselect = createSelector(
  userState,
  item => item.dataUsers
)