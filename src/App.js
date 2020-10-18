import React from 'react';
import './App.css';
import Lgn from './elements/login'
import Sgn from './elements/Signup'
import Mn from './elements/main'
import Dashboard from './elements/protected/private_page'
import Ln from './elements/landing'
import { Switch,Route,Redirect} from 'react-router-dom'
import error404 from './elements/404'

function App() {

  return(
      <div className="App">
       <Switch>
         <Route exact path="/" component={Ln}/>
         <Route exact path="/login" component={Lgn}/>
         <Route exact path="/Signup" component={Sgn}/>
         <Route exact path="/Dashboard" component={Mn}/>  
         <Route component={error404} />
         <Redirect to='' />
       </Switch>
      </div>
  );
}

export default App
