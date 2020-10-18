import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import Nava from './nav'
import lgo from './img/lg11.png'
import Ftr from './footer'
import loginuser from '../redux/login_action'

const Login = (e)=> {
    const [login,setState]= useState({Email:'',Password:'',Check:false})
    const dispatch= useDispatch();
    const upEmail=(f)=>{
        setState({...login,Email:f.target.value})
    }
    const upPass=(f)=>{
        setState({...login,Password:f.target.value})
    }
    const upCheck=(f)=>{
        setState({...login,Check:!login.Check})
    }
    const handlelogin=()=>{
        dispatch(loginuser(login))
    }
    return (
    <div>
        <div>
            <Nava name='Signup'></Nava>
        </div>
        <div className='container'>
            <img src={lgo} alt=''/>
        </div>
        <div className="container lg1">
            <form onSubmit={handlelogin}>
                <div className="form-group">
                    <h2>Log in</h2>
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={login.Email} onChange={upEmail} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={login.Password} onChange={upPass}></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" value={login.check} onClick={upCheck} />
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
