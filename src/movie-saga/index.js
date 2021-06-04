import MoviePage from './route/web';
import configStore from './store/config-store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Skeleton } from 'antd';

const { store, persistor } = configStore();

const AppMovie = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Skeleton active />}
        persistor={persistor}
      >
        <MoviePage/>
      </PersistGate>
    </Provider>
  )
}
export default AppMovie;