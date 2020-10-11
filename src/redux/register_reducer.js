import REGISTER from './input_type'

const newstate={
    Finame:'',
    Laname:'',
    UEmail:'',
    UMnum:'',
    UPass:'',
    UCpass:'',
    UCheck:false
}

const registernew=(state=newstate,action)=>
{
    switch(action.type)
    {
        case REGISTER:return{
            ...state,
            Finame:action.Fname,
            Laname:action.Lname,
            UEmail:action.Email,
            UMnum:action.Mnum,
            UPass:action.Pass,
            UCpass:action.Cpass,
            UCheck:action.Check
        }
        default: return state
    }
}
export default registernew;