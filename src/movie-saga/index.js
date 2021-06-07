import MoviePage from './route/web';
import configStore from './store/config-store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Skeleton } from 'antd';
import { ConnectedRouter } from 'connected-react-router';

const { store, persistor, history } = configStore();

const AppMovie = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Skeleton active />}
        persistor={persistor}
      >
        <ConnectedRouter history={history}>
          <MoviePage/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  )
}
export default AppMovie;