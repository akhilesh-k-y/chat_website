import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import Nava from './nav'
import lgo from './img/lg11.png'
import Ftr from './footer'

const Signup = (e) => {
    
    var [sign,setState]=useState({Fname:'',Lname:'',Email:'',Mnum:'',Pass:'',Cpass:'',Check:false});
    const dispatch = useDispatch;

    const frmsubmit=(f)=>{
        if(sign.Pass !== sign.Cpass)
        {
            alert('Paswword and Confirm Password Do Not Match!');
        }
        else if(sign.Check===false)
        {
            alert('You must agree to terms and conditions to continue!')
        }
        else{
            console.log(sign)
            dispatch({
                type:'REGISTER',
                Fname:sign.Fname,
                Lname:sign.Lname,
                Email:sign.Email,
                Mnum:sign.Mnum,
                Pass:sign.Mnum,
                Cpass:sign.pass,
                Check:sign.Check
            })
        }
        f.preventDefault();
    }
    const upfn=(f)=>{
        setState({...sign,Fname:f.target.value})
    }
    const upln=(f)=>{
        setState({...sign,Lname:f.target.value})
    }
    const upMa=(f)=>{
        setState({...sign,Email:f.target.value})
    }
    const upMnum=(f)=>{
        setState({...sign,Mnum:f.target.value})
    }
    const uppass=(f)=>{
        setState({...sign,Pass:f.target.value})
    }
    const upcnp=(f)=>{
        setState({...sign,Cpass:f.target.value})
    }
    const upcheck=(f)=>{
        setState({...sign,Check:!sign.Check})
    }
    return (
        <div>
            <div>
            <Nava name='Login' val={e.val} hm={e.hm}></Nava>
            </div>
            <div class='container'>
                <img src={lgo}/>
            </div>
            <div className="container lg1">
            <form onSubmit={frmsubmit}>
                <div class="form-row cnt">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" class="form-control" value={sign.Fname} onChange={upfn} id="Fname" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" class="form-control" value={sign.Lname} onChange={upln} id="Lname" required/>
                    </div>
                </div>
                <div class="form-row cnt">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" value={sign.Email} onChange={upMa} id="inputemail" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="mnumber">Mobile Number</label>
                    <input  class="form-control" id="mnumber" type="number" value={sign.Mnum} onChange={upMnum} min='6000000000' max='9999999999' required />
                    </div>
                </div>
                <div class="form-group cnt">
                    <label for="inputAddress">Password</label>
                    <input type="password" class="form-control" value={sign.Pass} onChange={uppass} id="inputpass" placeholder="" required/>
                </div>
                <div class="form-group cnt">
                    <label for="inputAddress2">Confirm Password</label>
                    <input type="password" class="form-control" value={sign.Cpass} onChange={upcnp} id="confpass" required/>
                </div>
                <div class="form-group cnt">
                    <div class="form-check">
                    <input class="form-check-input" defaultChecked={sign.Check} onChange={upcheck} type="checkbox" id="gridCheck"/>
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
