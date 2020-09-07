import React from 'react';
import lg from './img/lg11.png'

const Nava=(props)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={lg} width='50vw' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About-Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Register/Login</a>
            </li>
          </ul>
          <br />
          <form class="form-inline justify-content-center">
    <button class="btn btn-outline-dark" type="button">{props.name}</button>
          </form>
        </div>
      </nav>
    )
}
export default Nava