import PageListUser from './pages/app';
import myConfigureStore from './store';
import { Provider } from 'react-redux';

const { store } = myConfigureStore(); 

const AppSagaToolkit = () => {
  return (
    <Provider store={store}>
      <PageListUser/>
    </Provider>
  )
}

export default AppSagaToolkit;