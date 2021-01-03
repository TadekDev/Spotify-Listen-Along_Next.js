// REF: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
// * note: Reducers are functions that calculate a new state value based on previous state + an action

import { combineReducers } from "redux";

import devicesReducer, * as fromDevices from "../features/devices/devicesReducer.js";
import playbackReducer from "../features/playback/playbackReducer.js";
import queueReducer from "../features/queue/queueReducer.js";
import searchReducer from "../features/search/searchReducer.js";
import sessionReducer from "../features/session/sessionReducer.js";
import usersReducer from "../features/users/usersReducer.js";

// ================== //
//    ROOT REDUCER    //
// ================== //

export const reducers = () =>
  // pass through an object containing our slice reducers...
  combineReducers({
    // combineReducers will call each slice reducer individually,
    // pass in the specific slice of the Redux state,
    // and include each return value in the final new Redux state object
    queue: queueReducer,
    playback: playbackReducer,
    session: sessionReducer,
    users: usersReducer,
    search: searchReducer,
    devices: devicesReducer,
  });

export const getDevices = (state) => fromDevices.getDevices(state.devices);

export const getIsFetchingDevices = (state) =>
  fromDevices.getIsFetching(state.devices);
