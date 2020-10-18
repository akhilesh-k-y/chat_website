import REGISTER from './register_type'

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
        case REGISTER: console.log(action.INFO); break;
        default: return state
    }
    return state
}
export default registernew;