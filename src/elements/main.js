import React,{useState} from 'react'
import lg from './img/lg11.png'
import { useDispatch,useSelector } from 'react-redux'
import ChatElement from './chatElement'
import send from '../redux/chat_action'

const Main = () => {
    const [content,setState]= useState({dat:''})
    const chat_info = useSelector(state=>state.chat.payload)
    const dispatch = useDispatch()
    const handlechange=(f)=>{
        setState({...content,dat:f.target.value})
    }
    const sendchat =()=>{
        dispatch(send(content))
    }
    
    
    return (
        <div id='al'>
            <div id='rside'>
                <div id='lhd'>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand"><img src={lg} width='50vw' /></a>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Username<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </nav>
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
            <div id='lmain'>
                <div>
                    <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand">Navbar</a>
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                    <div id='content_chat'>
                        {chat_info.map(cat=>{return(
                            <ChatElement value={cat} key={cat.id} />
                        )})}
                    </div>
                    <footer class='inm'>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="cht" value={content.dat} onChange={handlechange} placeholder="Enter content" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" onClick={sendchat} id="button-addon2" >Send</button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Main;