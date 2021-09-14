import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Page404 } from './pages/404 page/404-Page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
