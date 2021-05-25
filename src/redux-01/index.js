
import AppCounter from './pages/app';
import store from './configStore';
import { Provider } from 'react-redux'

const AppRedux = () => {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <AppCounter/>
    </Provider>
  )
}

export default AppRedux;