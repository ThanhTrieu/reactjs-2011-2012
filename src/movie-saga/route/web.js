import React, { lazy, Suspense } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from "antd";

const SearchMoviePage = lazy(() => import('../pages/movie'));
const DetailMoviePage = lazy(() => import('../pages/detail-movie'));

const RouteApp = () => {
  return (
    <>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route exact path="/">
            <SearchMoviePage/>
          </Route>
          <Route path="/detail-movie/:slug~:id">
            <DetailMoviePage/>
          </Route>
        </Switch>
      </Suspense>
    </>
  )
}
export default RouteApp;