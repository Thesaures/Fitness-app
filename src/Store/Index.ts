import { createSlice, configureStore} from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'authentication',
    initialState: {isAuth:false},
    reducers:{
        login(state){
            console.log('entered')
             state.isAuth=true;
        },
        logout(state){
            console.log('entered')
             state.isAuth=false;
        }
    }
})
const store = configureStore({
    reducer: authSlice.reducer
})
export const authAction = authSlice.actions;
export default store;