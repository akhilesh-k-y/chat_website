import {CHAT} from './chat_send'

const initialstate ={
    loading:'',
    payload:[]
}

var sendreducer=(state=initialstate,action)=>
{
    switch(action.type){
        case CHAT:return{
            ...state,
            loading:'Done',
            payload:[...state.payload,action.content.dat]
        }

        default:return state;
    }
}
export default sendreducer