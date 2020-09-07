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
                <div className="form-group">
                    <h2>Signup</h2>
                </div>
                    <div class="form-group form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="city" class="col-sm-2  col-form-label">City</label>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" id="city"/>
                        </div>
                        <label for="state" class="col-sm-2  col-form-label">state</label>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" id="state"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="country" class="col-sm-2  col-form-label">Country</label>
                        <div class="col-sm-4">
                        <input type="text" class="form-control" id="country"/>
                        </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-6">Terms & Conditions</div>
                        <div class="col-sm-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label class="form-check-label" for="gridCheck1">
                            I acept the privecy terms.
                            </label>
                        </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <button type="submit" class="btn btn-dark">Signup</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <Ftr />
            </div>
    </div>
    )
}
export default Signup;
