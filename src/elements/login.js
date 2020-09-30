import React,{useState} from 'react'
import Nava from './nav'
import lgo from './img/lg11.png'
import Ftr from './footer'

const Login = (e)=> {
    var [frm,setState]=useState({email:'',pass:''})
    const submitHandler =()=>{
        alert(frm.email+frm.pass);
        
    };
    const updmail=(f)=>{
        setState({...frm,email:f.target.value})

    };
    const updpass=(f)=>{
        setState({...frm,pass:f.target.value})
    };
    return (
    <div>
        <div>
            <Nava name='Signup' val={e.val} hm={e.hm}></Nava>
        </div>
        <div className='container'>
            <img src={lgo} alt=''/>
        </div>
        <div className="container lg1">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <h2>Log in</h2>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={frm.email} onChange={updmail} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={frm.pass} onChange={updpass}></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in.</label>
                </div>
                <button type="submit" className="btn btn-dark" >Log in</button>
            </form>
        </div>
        <div>
            <Ftr />
        </div>
    </div>
    );
}

export default Login;
