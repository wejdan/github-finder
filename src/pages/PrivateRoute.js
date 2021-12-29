import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
import styled from 'styled-components';

const PrivateRoute = ({children,...rest}) => {
  const { error,user,isLoading,loginWithRedirect,isAuthenticated } = useAuth0();
  

  
  const isUser=isAuthenticated && user;
  console.log("isAuthenticated",isUser)


  return <Route {...rest} >

{isUser?children:<Redirect to="/login" ></Redirect>}
  </Route>;
};


export default PrivateRoute;
