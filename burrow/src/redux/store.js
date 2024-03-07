import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import { UserReducer } from './User/UserReducer';

export const store = configureStore({
    reducer: {
        user: UserReducer,
    },

    middleware: () =>[thunk]
});

export default store; // exporting the store
