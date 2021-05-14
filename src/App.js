
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Home from './components/DashBoard/Home'






function App() {
  return (
    <>
      <Router>
        
        <Switch>
        <Route exact path='/' component={Login}/>

        <Route exact path='/dash' component={Home}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
