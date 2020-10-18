import REGISTER from './register_type'


const register = (frm)=>{
    return (dispatch,getState)=>{

        dispatch({type:REGISTER,INFO:frm})
    }
}

export default register