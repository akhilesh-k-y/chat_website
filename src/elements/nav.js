import React from 'react';
import { Link } from 'react-router-dom';
import lg from './img/lg11.png'

const Nava=(props)=>{
  const go='/'+props.name;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to='/'><a className="navbar-brand"><img src={lg} width='50vw' /></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/'><a className="nav-link">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About-Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Register/Login</a>
            </li>
          </ul>
          <br />
          <form className="form-inline justify-content-center">
              <Link to={go}><button className="btn btn-outline-dark" type="button" >{props.name}</button></Link>
          </form>
        </div>
      </nav>
    )
}
export default Nava