import LoaderReducer from "../reducers/loader.reducer";
import { AuthReducer } from "../reducers/reducer";

export const rootReducer = combineReducers({
  AuthReducer,
  LoaderReducer
});
