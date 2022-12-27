import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout" >
            <Checkout />
          </Route>

          <Route exact path="/" >
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
