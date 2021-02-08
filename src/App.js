import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profie';
import Toggle from './demos/Toggle';
import Forms from './demos/Forms';
import Listingmaps from './demos/Listingmaps';
import Hooksdemo from './demos/Hooksdemo';
import Formiks from './demos/Formiks';
import './bootstrap.css';
import './custom.css'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CallApi from './demos/CallApi';
function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/toggle">Toggle</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/forms">Forms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listing-maps">Listing map</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/callapi">Call API</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/hooks">Hooks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/formiks">Formiks</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/toggle" component={Toggle} />
                <Route path="/forms" component={Forms} />
                <Route path="/listing-maps" component={Listingmaps} />
                <Route path="/callapi" component={CallApi} />
                <Route path="/formiks" component={Formiks} />
                <Route path="/hooks" component={Hooksdemo} />
      
  
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
