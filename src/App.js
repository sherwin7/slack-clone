import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* {Header} */}
        <Header />

        <div className="app__body">
          {/* {sidebar} */}
          <Sidebar />

          {/* {routing} */}

          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>

            <Route path="/" exact>
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
