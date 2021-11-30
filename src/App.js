import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import ContactForm from './Pages/Home/ContactForm/ContactForm';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Projects/Details/Details';
import Projects from './Pages/Projects/Projects/Projects';
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
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <Banner />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/details/:key">
            <Details />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
