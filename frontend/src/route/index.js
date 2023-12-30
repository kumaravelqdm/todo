import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './routes';
import { SignIn, NotFound, Home, Form } from "../screens";
const RouterApp = props => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path={AppRoutes.login} element={<SignIn />} />
        <Route exact path={AppRoutes.home} element={<Home />} />
        <Route exact path={AppRoutes.form} element={<Form />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
