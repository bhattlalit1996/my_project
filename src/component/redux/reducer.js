import {Divider} from "@material-ui/core";
import { GET_TIME } from "./types"

const initialState={
    now:new Date(). toLocaleTimeString(),
    numOfClick:0,
    content:[]
}


const reducer =(state=initialState,action)=>{
    switch (action.type){
        case GET_TIME :
            const time= new Date(). toLocaleTimeString();
            const add ="You clicked at " + time +"\n";
        return{
            now: time,
            numOfClick: state.numOfClick+1,
            content: [add,...state.content]
        };
        default:
        return state;

    }
    
}

export default reducer;