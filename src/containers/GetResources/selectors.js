import { createSelector } from 'reselect';

const selectGetResourcesDomain = (state) => state.get('getResources');

const makeSelectGetResources = () => createSelector(
  selectGetResourcesDomain,
  (substate) => substate.toJS()
);

export default makeSelectGetResources;
export {
  selectGetResourcesDomain,
};
