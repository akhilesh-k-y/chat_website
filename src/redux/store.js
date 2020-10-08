import {createStore} from 'redux'
import sendreducer from './chat_reducer'

const store = createStore(sendreducer)

export default store