import CoronaVirus from './pages/index';
import { Provider } from 'react-redux';
import configureStore from './store/config-store';

const { store } = configureStore();

const AppVirus = () => {
  return (
    <Provider store={store}>
      <CoronaVirus/>
    </Provider>
    
  )
}
export default AppVirus;