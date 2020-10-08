import {CHAT} from './chat_send'

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
        default:return state;
    }
}
export default sendreducer