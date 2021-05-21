import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { SignIn } from './registration/SignIn';
import { Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Adminka from './pages/Adminka';

function App() {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/adminka" component={Adminka} exact />
        {/* <Route path="/admin" component={SignIn} exact /> */}
      </div>
    </div>
  );
}

export default App;
