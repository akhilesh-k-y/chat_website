import {applyMiddleware, createStore} from 'redux'
import rootreducer from './rootreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getFirebase } from 'react-redux-firebase'
import { getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'

const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})))
);

export default store