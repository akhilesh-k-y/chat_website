import React from 'react'
import Nava from './nav'
import lgo from './img/lg11.png'
import Ftr from './footer'

const Signup = () => {
    return (
        <div>
            <div>
            <Nava name='Login'></Nava>
            </div>
            <div class='container'>
                <img src={lgo}/>
            </div>
            <div className="container lg1">
            <form>
                <div class="form-row cnt">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">First Name</label>
                    <input type="text" class="form-control" id="Fname" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Last Name</label>
                    <input type="text" class="form-control" id="Lname" required/>
                    </div>
                </div>
                <div class="form-row cnt">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputemail" required/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="mnumber">Mobile Number</label>
                    <input  class="form-control" id="mnumber" type="number"  min='6000000000' max='9999999999' required />
                    </div>
                </div>
                <div class="form-group cnt">
                    <label for="inputAddress">Password</label>
                    <input type="password" class="form-control" id="inputpass" placeholder="" required/>
                </div>
                <div class="form-group cnt">
                    <label for="inputAddress2">Confirm Password</label>
                    <input type="password" class="form-control" id="confpass" required/>
                </div>
                <div class="form-group cnt">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        I accept the privacy terms and conditions.
                    </label>
                    </div>
                </div>
                        <button type="submit" class="btn btn-dark">Signup</button>
            </form>
            </div>
            <div>
                <Ftr />
            </div>
    </div>
    )
}
export default Signup;
