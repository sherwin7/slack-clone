import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';

import { useStateValue } from './contextApi/StateProvider';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Fragment>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                <Route path="/" exact>
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </Fragment>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
