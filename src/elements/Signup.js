import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import Nava from './nav'
import lgo from './img/lg11.png'
import Ftr from './footer'
import register from '../redux/register_action'

const Signup = (e) => {
    const [frm,setState]=useState({Fname:'',Lname:'',Email:'',Mnum:'',Pass:'',Cpass:'',Check:false})
    const dispatch = useDispatch();
    const Fnamechange=(f)=>{
        return(
            setState({...frm,Fname:f.target.value})
        )
    }
    const Lnamechange=(f)=>{
        return(
            setState({...frm,Lname:f.target.value})
        )
    }
    const Emailchange=(f)=>{
        return(
            setState({...frm,Email:f.target.value})
        )
    }
    const Mnumchange=(f)=>{
        return(
            setState({...frm,Mnum:f.target.value})
        )
    }
    const Passchange=(f)=>{
        return(
            setState({...frm,Pass:f.target.value})
        )
    }
    const Cpasschange=(f)=>{
        return(
            setState({...frm,Cpass:f.target.value})
        )
    }
    const Checkchange=(f)=>{
        return(
            setState({...frm,Check:!frm.Check})
        )
    }

    const frmsubmit=(f)=>{
        f.preventDefault();
        if(frm.Pass !== frm.Cpass)
        {
            alert('Paswword and Confirm Password Do Not Match!');
        }
        else if(frm.Check===false)
        {
            alert('You must agree to terms and conditions to continue!')
        }
        else{
            dispatch(register(frm))
        } 
    }

    return (
        <div>
            <div>
            <Nava name='Login'></Nava>
            </div>
            <div class='container'>
                <img src={lgo} alt='NOT FOUND!!'/>
            </div>
            <div className="container lg1">
            <form onSubmit={frmsubmit}>
                <div class="form-row cnt">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" class="form-control" value={frm.Fname} onChange={Fnamechange} id="Fname" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" class="form-control" value={frm.Lname} onChange={Lnamechange} id="Lname" required/>
                    </div>
                </div>
                <div class="form-row cnt">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" value={frm.Email} onChange={Emailchange} id="inputemail" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="mnumber">Mobile Number</label>
                    <input  class="form-control" id="mnumber" type="number" value={frm.Mnum} onChange={Mnumchange} min='6000000000' max='9999999999' required />
                    </div>
                </div>
                <div class="form-group cnt">
                    <label for="inputAddress">Password</label>
                    <input type="password" class="form-control" value={frm.Pass} onChange={Passchange} id="inputpass" placeholder="" required/>
                </div>
                <div class="form-group cnt">
                    <label for="inputAddress2">Confirm Password</label>
                    <input type="password" class="form-control" value={frm.Cpass} onChange={Cpasschange} id="confpass" required/>
                </div>
                <div class="form-group cnt">
                    <div class="form-check">
                    <input class="form-check-input" defaultChecked={frm.Check} onChange={Checkchange} type="checkbox" id="gridCheck"/>
                    <label class="form-check-label"  for="gridCheck">
                        I accept the privacy terms and conditions.
                    </label>
                    </div>
                </div>
                        <button type="submit" class="btn btn-dark" >Signup</button>
            </form>
            </div>
            <div>
                <Ftr />
            </div>
    </div>
    )
}
export default Signup;
