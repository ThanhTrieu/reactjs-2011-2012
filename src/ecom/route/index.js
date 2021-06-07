import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';

const Homepage = lazy(() => import('../pages/home/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));

const RouteAppEcom = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/detail">
            <DetailPage/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouteAppEcom