import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Header from './components/header';
import LandingP from './components/landingpage';
import FQA from './components/fqa';
import Chats from './components/createchats';


function App() {
  return (
    <div className="App">
      <Router>
        <div >
          {/* Header */}
          <div className="headerdiv"><Header />
          </div>
          <nav>
            <ul>
              <li>
                <Link className="Homepage" to='/'>Homepage</Link>
              </li>
              <li>
                <Link className="FQA" to="/FQA">FQA</Link>
              </li>

              <li>
                <Link className="LandingP" to="/LandingP">LandingP</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/FQA" element={<FQA />} />
            <Route path="/LandingP" element={<LandingP />} />
            <Route path="/Chats" element={<Chats />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
