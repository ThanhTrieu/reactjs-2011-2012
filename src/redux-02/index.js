import IncrementCounter from './components/increment';
import DecrementCounter from './components/decrement';
import ResultCounter from './components/result';
import store from './store';
import { Provider } from 'react-redux';

const AppCounter = () => {
  return (
    <Provider store={store}>
      <IncrementCounter/>
      <DecrementCounter/>
      <ResultCounter/>
    </Provider>
  )
}
export default AppCounter;