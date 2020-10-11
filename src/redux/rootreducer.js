import registerreducer from './register_reducer'
import chatreducer from './chat_reducer'
import {combineReducers} from 'redux'

const combine = combineReducers;
const rootreducer =combine({
    chat:chatreducer,
    register:registerreducer
})
export default rootreducer