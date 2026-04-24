import { createSlice } from '@reduxjs/toolkit'

const SerachSlice = createSlice({
    name:"search",
    initialState:{
        query:"random",
        Tab:"Photos",
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,actions){
            state.query=actions.payload
        },
        setTab(state,actions){
            state.Tab=actions.payload
        },
        setLoading(state,actions){
            state.loading=true
        },
        setResults(state,actions){
            state.results=actions.payload
            state.loading=false
        },
        setError(state,actions){
            state.error=actions.payload
            state.loading=false
        },
        clearResult(state){
            state.results=[]
        }
    }
})

export const {setError,setLoading,setQuery,setResults,setTab,clearResult} = SerachSlice.actions
export default SerachSlice.reducer