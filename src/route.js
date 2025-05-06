import React from "react";
import {
    Switch,
    Route,
    useLocation
} from "react-router-dom";

import Login from './login';
import Header from './components/header';
import ProductPage from './components/product';
import ProductDetailsPage from './components/product-details';
import CartPage from './components/cart';
import PaymentPage from './components/payment';
import PaymentSuccess from './components/payment-success';
import AboutComponent from './components/about/about';

function Routes() {
    let location = useLocation();
    let locStr = location.pathname.split(',');

    return (
        <>
            {
                !!locStr && locStr[0] === '/' ?
                null : <Header />
            }
            
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/about">
                    <AboutComponent />
                </Route>
                <Route path="/product-list">
                    <ProductPage />
                </Route>
                <Route path="/product-details/:pId">
                    <ProductDetailsPage />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/payment">
                    <PaymentPage />
                </Route>
                <Route path="/payment-success">
                    <PaymentSuccess />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;
