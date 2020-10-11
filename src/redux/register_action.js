import REGISTER from './register_type'

const register = ()=>{
    return{
        type:REGISTER,
        Fname:'',
        Lname:'',
        Email:'',
        Mnum:'',
        Pass:'',
        Cpass:'',
        Check:false
    }
}