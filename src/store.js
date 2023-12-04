import { configureStore } from '@reduxjs/toolkit';
import entrepriseReducer from './features/entrepriseSlice'
import userReducer from './features/UserSlice';
import projetReducer from './features/projetsSlice'
import UserElementReducer from './features/UserElement'
import moduleReducer from './features/ModuleSlice';
import profileReducer  from './features/profileSlice'

//persit our store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//reducers
const reducer = combineReducers({
  user: userReducer,
  entreprise: entrepriseReducer,
  projetId: projetReducer,
  userElement: UserElementReducer,
  idProjet: moduleReducer,
  profile: profileReducer
});

const persistConfig = {
  key: "root",
  storage,
};


// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// const store = configureStore({
//     reducer: {
//      user: userReducer,
//      entreprise: entrepriseReducer,
//     },
//   });

export default store;

