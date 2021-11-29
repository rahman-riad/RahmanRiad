import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects"></Route>
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="*"></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
