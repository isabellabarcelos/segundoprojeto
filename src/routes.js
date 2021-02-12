import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Login from "./pages/Login/index"
import ShoppingList from './pages/shoppingList';
import MeuCarrinho from './pages/MeuCarrinho';
import ProducDetails from './pages/ProducDetails';
import TalkToUs from './pages/TalkToUs';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import Key from './pages/Key';
import Profile from './pages/Profile';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {ShoppingList}/>
                <Route path = "/descricaodoproduto" component = {ProducDetails}/>
                <Route path = "/Login" component = {Login}/>
                <Route path = "/faleconosco" component = {TalkToUs}/>
                <Route path = "/Signin" component = {SignIn}/>
                <Route path = "/QuemSomos" component = {AboutUs}/>
                <Route path = "/meucarrinho" component = {MeuCarrinho}/>
                <Route path = "/recuperarsenha" component = {Key}/>
                <Route path = "/perfil" component = {Profile}/>
            </Switch>
        </BrowserRouter>

    );
}