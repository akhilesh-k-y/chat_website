import React,{useState} from 'react';
import './App.css';
import Lgn from './elements/login'
import Sgn from './elements/Signup'
import Mn from './elements/main'
import Ln from './elements/landing'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  var [count,setState]= useState(true);
  var [lnd,setLstate] = useState(true);
  const chngsgnin =()=>{
    setState(count=true);
  }
  const chngsgnup =()=>{
    setState(count=false);
  }
  const lndpgd = ()=>{
    setLstate(lnd=false);
  }
  const lndpgu = ()=>{
    setLstate(lnd=true);
  }
  return(
      <Provider store={store}>
      <div className="App">
       {!lnd && !count && <Sgn val={chngsgnin} hm={lndpgu} />}
       {!lnd && count && <Lgn val={chngsgnup} hm={lndpgu} />}
       {lnd && <Ln val={lndpgd} />} 
        </div>
        </Provider>
  );
}

export default App
