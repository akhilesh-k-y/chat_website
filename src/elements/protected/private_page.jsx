import React from 'react'
import main from '../main'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import {Route,Redirect} from 'react-router-dom'

const Private_page = (children,...rest) => {
    const auth= useSelector(state=>state.firebase.auth);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
}

export default Private_page
