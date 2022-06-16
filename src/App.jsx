import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import EditInfo from './components/EditInfo';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
    </div>
    <Switch>
      <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/add">
        <Add/>
      </Route>
      <Route path="/edit/:user_id" component={EditInfo}/>
    </Switch>
    </Router>
  );
}

export default App;
