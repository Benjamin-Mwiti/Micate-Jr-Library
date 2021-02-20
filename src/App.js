import './App.css';
import LandingPage from './LandingPage';
import Library from './Library';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/library" component={Library} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
