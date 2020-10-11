import {CHAT} from './chat_send'

const send=()=>{
    return{
    type:CHAT,
    text:''
    };
}

export default send