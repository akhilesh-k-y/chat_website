import LOGIN from './login_type'

const loginuser=(cred)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({type:LOGIN,cred})
    }
}
export default loginuser