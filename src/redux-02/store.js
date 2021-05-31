import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

const store = configureStore(rootReducer);
export default store;