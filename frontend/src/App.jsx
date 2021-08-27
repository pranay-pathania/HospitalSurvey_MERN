import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import FormComponent from './components/FormComponent/FormComponent'
import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/survey" exact>
        <FormComponent />
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
