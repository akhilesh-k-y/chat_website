import {CHAT} from './chat_send'
import INPUT from './input_type'

const initialstate ={
    dat:"",
    info:""
}

var sendreducer=(state=initialstate,action)=>
{
    switch(action.type){
        case CHAT:return{
            ...state,
            info:state.info+'<div id="cont">'+state.dat+'</div><br/>'
        }

        case INPUT: return{
            ...state, 
            dat:action.text
        };

        default:return state;
    }
}
export default sendreducer