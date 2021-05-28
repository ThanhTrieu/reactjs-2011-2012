import { createSelector } from 'reselect';
import { helper } from '../helpers/common';

// viet ham lay state tu reducer corona
const dataVirus = state => state.corona;

// lay state loading
export const getDataLoading = createSelector(
  dataVirus,
  item => item.loading
)

// lay data global
export const getDataGlobalVirus = createSelector(
  dataVirus,
  item => {
    if(!helper.isEmptyObject(item.virus)){
      if(item.virus.hasOwnProperty('Global')){
        return item.virus.Global;
      }
      return null;
    }
    return null;
  }
)

// lay data countries
export const getDataCountriesVirus = createSelector(
  dataVirus,
  item => {
    if(!helper.isEmptyObject(item.virus)){
      if(item.virus.hasOwnProperty('Countries')){
        return item.virus.Countries;
      }
      return null;
    }
    return null;
  }
)

