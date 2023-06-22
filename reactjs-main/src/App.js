import React from "react";
import MyRoutes from "./MyRoutes";
import "./App.css";
import "./bootstrap.css";
// import GlobalContextProvider from "./components/GlobalContext";
import { combineReducers, createStore } from "redux";
import counterReducer from "./components/redux-example/counterReducer";
import { Provider } from "react-redux";
import gameReducer from "./components/redux-example/gameReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./FindReducres/Store";

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };

  const rootReducer = combineReducers({
    counter: counterReducer,
    game: gameReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // const myStore = createStore(counterReducer)
  // const myStore = createStore(gameReducer)
  // const myStore = createStore(rootReducer)
  const myStore = createStore(persistedReducer);
  let myPersistor = persistStore(myStore);

  return (
    <>
      {/* <GlobalContextProvider> */}
      {/* <Provider store={myStore}>
        <PersistGate persistor={myPersistor}> */}
      <Provider store={store}>
        <MyRoutes />
      </Provider>
      {/* </PersistGate>
      </Provider> */}
      {/* </GlobalContextProvider> */}
    </>
  );
}

export default App;
