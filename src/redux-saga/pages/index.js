import React, { useEffect } from 'react';
import LayoutCorona from '../components/layout';
import GlobalCorona from '../components/global';
import CountriesCorona from '../components/countries';
import { useDispatch } from 'react-redux';
import { requestServerData } from '../action/index';

const AppCoronaVirus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch action - middleware saga se nhan dc
    dispatch(requestServerData());
  }, [dispatch]);

  
  

  return (
    <LayoutCorona>
      <GlobalCorona/>
      <CountriesCorona/>
    </LayoutCorona>
  )
}
export default React.memo(AppCoronaVirus);