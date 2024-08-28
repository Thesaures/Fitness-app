import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {isAuth:false},
    reducers:{
        login:(state)=>{
            console.log('this is login')
             state.isAuth=true;
        },
        logout:(state)=>{
             state.isAuth=false;
        },
        
    }
})
export const {login,logout}= authSlice.actions;
export default authSlice.reducer;