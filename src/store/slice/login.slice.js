import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from'axios';



const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const baseUrl = process.env.REACT_APP_API_URL;

function createInitialState() {
   
    
    return {
       
        // initialize state from local storage to enable user to stay logged in
        user: null,
        error: null,
        message: null,
     
    }
};
function createReducers() {
    return {
        resetMessage: (state) => {
            state.message = null
        },
        resetMessages: (state) => {
            state.error = null
        }
    };
}



const slice = createSlice({
    name,
    initialState,
    reducers,
    extraReducers: createExtraReducers
});


const login = () => {
 
    return createAsyncThunk(
      
        `${name}/login`,
        async ({ email, password, rememberMe }) => {
            const response = await axios.post(`${baseUrl}/loginUser`, { email, password })
            
            const data = response.data.data
          
            return response
        }
    );
};

const extraActions = {
    login: login(),
};


function createExtraReducers(builder) {
    var { pending, fulfilled, rejected } = extraActions.login;
 
    builder
        .addCase(pending, (state) => {
            state.error = null;
        })
        .addCase(fulfilled, (state, action) => {
            const user = action.payload.data.data;  
           
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            state.user = user;
       
            // get return url from location state or default to home page
            // const { from } = history.location.state || { from: { pathname: '/' } };
            // history.navigate(from);
        })
        
        .addCase(rejected, (state, action) => {
            state.error = action.error;
        })

   
   
}

// exports

export const authReducer = slice.reducer;
export const authActions = { ...slice.actions, ...extraActions };
