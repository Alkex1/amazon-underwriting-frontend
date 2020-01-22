import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import linkReducer from "./form_reducer";

export default combineReducers({
    link: linkReducer,
    form: formReducer
})