import { createStore, combineReducers } from 'redux';
import { reducer as formreducer} from 'redux-form';
import { formReducer } from './reducers/form';

export default createStore(
  combineReducers({
    form: formReducer
  })
)
