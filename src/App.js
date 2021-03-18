import React from 'react';
import thunkMidleware from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {
  ConferenceRoom,
  VoxeetProvider,
  reducer as voxeetReducer,
} from "@voxeet/react-components";
import "@voxeet/react-components/dist/voxeet-react-components.css";

const reducers = combineReducers({
  voxeet: voxeetReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(reducers, composeEnhancers(applyMiddleware(thunkMidleware)));

const settings = {
  consumerKey: "Eg-TCOMKjhFQNsi8dedkWA==",
  consumerSecret: "[REDACTED]",
  conferenceAlias: "Sample",
}

function App() {
  return(
    <VoxeetProvider store={configureStore()}>
      <ConferenceRoom
        isWidget
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
      />
    </VoxeetProvider>
  );
};

export default App;
