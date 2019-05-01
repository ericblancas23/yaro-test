import React from 'react';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/register/' component={Register}/>
        <Route exact path='/login' component={Login}/>
    </div>
    </Router>
  );
}

export default App;
