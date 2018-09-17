import { combineReducers } from 'redux';
import PhoneListReducer from '../containers/PhoneList/reducer';
import PhoneDetailsReducer from '../containers/PhoneDetails/reducer';

const rootReducer = combineReducers({
  phones: PhoneListReducer,
  phone: PhoneDetailsReducer,
});

export default rootReducer;
