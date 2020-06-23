import { createStore } from 'redux';
import catReducer from "./reducers/catReducer";

export default createStore(catReducer);
