import LOGIN from './login_type'

const logininit={
    loading:'',
    isAuthenticated:false
}

const loginReducer = (state=logininit,action)=>
{
    switch(action.type)
    {
        
        case LOGIN:return {
            ...state,
            loading:'done',
            isAuthenticated:true
        };
        default:return state
    }
}

export default loginReducer