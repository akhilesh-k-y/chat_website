import {CHAT} from './chat_send'

const send=(content)=>{
    return (dispatch,getstate,{getFirebase,getFirestore})=>{
        dispatch({type:CHAT,content})
    }
}

export default send