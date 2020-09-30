import React from 'react'
import Nava from './nav'
import lgo from './img/lg11.png'
import Ftr from './footer'

const lgin = (e) => {
    return (
    <div>
        <div>
            <Nava name='Signup' val={e.val} hm={e.hm}></Nava>
        </div>
        <div class='container'>
            <img src={lgo}/>
        </div>
        <div className="container lg1">
            <form>
                <div className="form-group">
                    <h2>Log in</h2>
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Keep me logged in.</label>
                </div>
                <button type="submit" className="btn btn-dark" >Log in</button>
            </form>
        </div>
        <div>
            <Ftr />
        </div>
    </div>
    )
}

export default lgin
