import React from 'react';
import LayoutCorona from '../components/layout';
import GlobalCorona from '../components/global';
import CountriesCorona from '../components/countries';

const AppCoronaVirus = () => {
  return (
    <LayoutCorona>
      <GlobalCorona/>
      <CountriesCorona/>
    </LayoutCorona>
  )
}
export default React.memo(AppCoronaVirus);