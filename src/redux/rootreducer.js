import registerreducer from './register_reducer'
import chatreducer from './chat_reducer'
import loginReducer from './login_reducer'
import {combineReducers} from 'redux'
import {  firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer} from 'redux-firestore'

const combine = combineReducers;
const rootreducer =combine({
    chat:chatreducer,
    register:registerreducer,
    login:loginReducer,
    frbase:firebaseReducer,
    frstore:firestoreReducer
})
export default rootreducer