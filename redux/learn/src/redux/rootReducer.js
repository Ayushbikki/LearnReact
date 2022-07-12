import { combineReducers  } from "redux";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReduce from "./iceCream/iceCreamReducer";
import reducer from "./user/userReducer"

const rootReducer = combineReducers({
    cake:  cakeReducer,
    iceCream: iceCreamReduce,
    user: reducer
})
export default rootReducer;