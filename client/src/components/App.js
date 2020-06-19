import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import data from '../services/data';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const App = () => {
    const openMenu = () => document.querySelector('.sidebar').classList.add('open');
    const closeMenu = () => document.querySelector('.sidebar').classList.remove('open');
    return (
            <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to="/">Shopland</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Sign In</a>
                    </div>
                </header>
                
                <aside className="sidebar">
                    <h3>
                        Shopping Categories
                    </h3>
                    <button onClick={closeMenu}>x</button>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/" exact component={HomeScreen} />
                        <Route path="/product/:id" component={ProductScreen} />

                        

                    </div>
                </main>

                <footer className="footer">
                    <div>
                        All rights reserved!
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

export default App;