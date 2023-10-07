import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from'axios';



const name = 'getData';
const initialState = createInitialState();
const reducers = createReducers();
const baseUrl = process.env.REACT_APP_API_URL;

function createInitialState() {
   
    
    return {
       
        // initialize state from local storage to enable user to stay getData
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


const getRecord = () => {

 
    return createAsyncThunk(
        `${name}/getUser`,
        async ({userId}) => {
            const response = await axios.get(`${baseUrl}/getUser/${userId}` )


            console.log("getUser",response)
            
            const data = response.data.data
            return response
        }
    );
};

const extraActions = {
    getRecord: getRecord(),
};


function createExtraReducers(builder) {
    var { pending, fulfilled, rejected } = extraActions.getRecord;
 
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

export const getReducer = slice.reducer;
export const getActions = { ...slice.actions, ...extraActions };
