import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home} />
    </Router>
  );
}

export default App;
