import React from 'react'
import Nv from './nav'
import Ftr from './footer'
import Cht from './img/chat.png'
import Ppl from './img/pple.png'

const landing = (e) => {
    return (
        <div>
            <div>
                <Nv name='Login'></Nv>
            </div>
            <div>
                <ul class="list-unstyled">
                        <li class="media my-4">
                            <img src={Cht} class="mr-3" alt="..." />
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">Chat With All Your Friends</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </li>
                        <li class="media">
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">Connect with millions of People</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                            <img src={Ppl} class="ml-3" alt="..." />
                        </li>
                </ul>
            </div>
            <Ftr />
            
        </div>
    )
}
export default landing;
